use reqwest::Client;
use tokio::fs::{self, File};
use tokio::io::AsyncWriteExt;
use std::path::{Path};
use futures_util::StreamExt;

#[derive(Debug, Clone)]
enum DownloadStatus {
    Pending,
    Downloading,
    Paused,
    Cancelled,
    Completed,
}

#[tauri::command]
pub async fn download_file_with_resume(url: String, file_path: String) -> Result<(), String> {
    println!("다운로드 시작됨");

    let progress_path = format!("{}.progress", file_path);
    let mut start_byte = 0;
    if Path::new(&progress_path).exists() {
        start_byte = fs::read_to_string(&progress_path).await.map_err(|e| e.to_string())?.parse::<u64>().map_err(|e| e.to_string())?;
    }
    println!("{}에 게임 다운로드 중.. 시작 바이트: {}", file_path, start_byte);

    let client = Client::new();
    let response = client.get(&url)
        .header("Range", format!("bytes={}-", start_byte))
        .send().await.map_err(|e| e.to_string())?;

    println!("서버에서 파일 불러오는 중 ");

    let mut file = if start_byte > 0 {
        File::open(file_path+ "/.progress").await.map_err(|e| e.to_string())?
    } else {
        File::create(file_path+ "/.progress").await.map_err(|e| e.to_string())?
    };

    println!("파일 생성 완료. 덮어쓰기 중..");

    let mut stream = response.bytes_stream();
    while let Some(item) = stream.next().await {
        let chunk = item.map_err(|e| e.to_string())?;
        file.write_all(&chunk).await.map_err(|e| e.to_string())?;
        start_byte += chunk.len() as u64;

        fs::write(&progress_path, start_byte.to_string()).await.map_err(|e| e.to_string())?;
        println!("현재 다운로드된 바이트: {}", start_byte);
    }

    fs::remove_file(&progress_path).await.map_err(|e| e.to_string())?;

    Ok(())
}