[Korean](./documents/korean.md)

<div align="center">

# Project Odin

This project is still in the development stage!

<b>Many things still need to be implemented, and many things will change.<b/>

</div>

# Project Info

Project Odin is an open-source game distribution platform developed for indie games.

It is designed to effectively support indie game developers with low fees and developer subscriptions.

Features for gamers, such as Discord integration and DRM-Free, will also be available.

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

1. Clone the project

```cmd
$ git clone https://github.com/odin-store/native.git
```

2. Install packages via pnpm

```cmd
$ pnpm i
```

3. Rename .env.sample to .env.development.

All values in .env.sample are example values. Please modify them according to your environment.

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

- BACKEND_URL : URL of your backend server.
- DISCORD_CLIENT_ID : Client ID provided by the Discord Developer Portal.

> You can get your portone api info from [here](https://portone.io/)

## Start your own client

Enter the command below to start your client.

```cmd
$ pnpm tauri dev
```

## Build your client

Enter the command below to build your client.

```cmd
$ pnpm tauri build
```
