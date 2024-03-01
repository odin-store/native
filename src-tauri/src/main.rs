#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;
use std::time::{SystemTime, UNIX_EPOCH};
use declarative_discord_rich_presence::{activity, DeclarativeDiscordIpcClient};
use declarative_discord_rich_presence::activity::{Assets, Timestamps};
use dotenv::dotenv;
use tauri::{Manager, State};

#[tauri::command]
fn set_activity(
    discord_ipc_client: State<'_, DeclarativeDiscordIpcClient>,
    state: String,
    details: String,
    image: String,
    image_details: String
) {
    let start_time:u32 =env::var("TIMESTAMP").unwrap().parse().unwrap();

    let _ = discord_ipc_client.set_activity(activity::Activity::new()
            .state(&*state)
            .details(&*details)
            .assets(
                Assets::new()
                    .small_image("logo")
                    .small_text("Odin Launcher")
                    .large_image(&*image)
                    .large_text(&*image_details)
            )
            .timestamps(Timestamps::new().start(start_time as i64))
            .buttons(vec![activity::Button::new(
                "View In Project Odin".parse().unwrap(),
                "https://damie.works/".parse().unwrap())
            ])
    );
}

fn main() {
    dotenv().ok();

    tauri::Builder::default()
        .setup(|app| {
            let client_id = env::var("DISCORD_CLIENT_ID").unwrap();

            let discord_ipc_client = DeclarativeDiscordIpcClient::new(&*client_id);

            discord_ipc_client.enable();

            let timestamp = SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .expect("Failed to get system time")
                .as_secs();

            env::set_var("TIMESTAMP", timestamp.to_string());

            discord_ipc_client.set_activity(
                activity::Activity::new()
                .state("Loading Odin Launcher")
                .timestamps(Timestamps::new().start(timestamp as i64))
                .assets(Assets::new()
                    .small_image("logo")
                    .small_text("Odin Launcher")
                )
            )?;

            app.manage(discord_ipc_client);

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![set_activity])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
