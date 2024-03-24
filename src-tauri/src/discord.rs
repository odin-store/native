use std::env;
use declarative_discord_rich_presence::{activity, DeclarativeDiscordIpcClient};
use declarative_discord_rich_presence::activity::{Assets, Timestamps};
use tauri::State;

#[tauri::command]
pub fn set_activity(
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