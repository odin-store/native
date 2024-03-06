[English](../README.md)

<div align="center">

# Project Odin

이 프로젝트는 아직 개발 단계에 있어요!

<b>많은 것들이 아직 구현이 필요하고, 많은 것들이 변경될 거에요.</b>

</div>

# Project Info

프로젝트 오딘은 인디 게임들을 위해 개발된
오픈 소스 게임 유통 플랫폼입니다.

적은 수수료와 개발자 구독 등
인디 게임 개발자들을 효과적으로 지원하기 위해 설계되었어요.

디스코드 연동과 DRM-Free 등
게이머들을 위한 기능들도 갖추게 될 예정이에요.

# Project Stack

## Client Front-End

- Prismjs
- React
- React Markdown
- React Router
- Redux
- Sass
- Swiper
- Tauri
- Typescript

## Client Back-End

- Rust
- Rust Discord Rich Presence

# Running on your machine

## Requirements

- Node.js ^21.6 (Recommend)
- Rust
- pnpm

## Installation

1. 프로젝트를 복제합니다.

```cmd
$ git clone https://github.com/odin-store/native.git
```

2. 패키지를 설치합니다.

```cmd
$ pnpm i
```

3. .env.sample을 .env.development로 변경합니다.

.env.sample의 값들은 전부 예시 값들입니다. 사용자의 환경에 맞춰 수정해 주세요.

```env
VITE_APP_BACKEND_URL=

#discord
DISCORD_CLIENT_ID=

#portone
VITE_APP_PORTONE_STORE_ID=
VITE_APP_PORTONE_CHANNEL_KEY=
VITE_APP_PORTONE_PAYMENT_ID_PREFIX=
VITE_APP_PORTONE_PGPROVIDER=
VITE_APP_PORTONE_CURRENCY=
```

- BACKEND_URL : 백엔드 서버의 URL을 입력해 주세요.
- DISCORD_CLIENT_URL : Discord Developer Portal에서 제공하는 Client Id를 입력해 주세요.

> 포트원 API 정보는 [여기](https://portone.io/)에서 획득하실 수 있어요.

## Start your own client

아래 명령어를 입력해 클라이언트를 실행시킬 수 있어요.

```cmd
$ pnpm tauri dev
```

## Build your client

아래 명령어를 입력해 클라이언트를 빌드할 수 있어요.

```cmd
$ pnpm tauri build
```
