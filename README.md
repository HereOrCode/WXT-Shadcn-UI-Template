# WXT Shadcn UI Template

A browser extension template built with WXT, React, Tailwind CSS v4, shadcn/ui, and WebExt Core.

It is designed to help you quickly build Chrome and Firefox extensions with a modern UI, type safety, and solid extension foundations.

## Features

- Built on WXT with Manifest V3 by default
- React 19 for the popup UI
- Tailwind CSS v4 and shadcn/ui integrated
- `@` path alias configured for `src`
- WebExt Core included for messaging and storage
- Includes `background`, `content script`, and `popup` entrypoints
- Supports development, build, and packaging for both Chrome and Firefox

## Tech Stack

- WXT
- React
- Tailwind CSS v4
- shadcn/ui
- WebExt Core
- TypeScript

## Quick Start

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start development

Chrome:

```bash
pnpm dev
```

Firefox:

```bash
pnpm dev:firefox
```

### 3. Build the extension

Chrome:

```bash
pnpm build
```

Firefox:

```bash
pnpm build:firefox
```

### 4. Package as a zip file

Chrome:

```bash
pnpm zip
```

Firefox:

```bash
pnpm zip:firefox
```

## Available Scripts

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `pnpm dev`           | Start Chrome development      |
| `pnpm dev:firefox`   | Start Firefox development     |
| `pnpm build`         | Build the Chrome extension    |
| `pnpm build:firefox` | Build the Firefox extension   |
| `pnpm zip`           | Package the Chrome extension  |
| `pnpm zip:firefox`   | Package the Firefox extension |
| `pnpm compile`       | Run TypeScript type checking  |

## Project Structure

```text
src/
	assets/
		styles/
			globals.css        # Global Tailwind + shadcn/ui styles
	components/
		ui/                  # shadcn/ui components
	entrypoints/
		background.ts        # Background script
		content.ts           # Content script
		popup/               # Extension popup page
			App.tsx
			main.tsx
	lib/
		utils.ts             # Shared utilities such as cn()
	utils/
		messaging.ts         # WebExt Core messaging example
		storage.ts           # WebExt Core storage example
```

## Entrypoints

### Popup

The popup entry is located in `src/entrypoints/popup`.

- `main.tsx` mounts the React application
- `App.tsx` is the main popup UI and the best place to start building your extension interface

### Background

The background script is located in `src/entrypoints/background.ts` and is a good place to handle:

- Lifecycle events
- Browser API calls
- Messaging with the content script or popup

### Content Script

The content script is located in `src/entrypoints/content.ts`.

The current example matches `*://*.google.com/*` by default. You can update `matches` as needed.

## Using shadcn/ui

This project already includes the basic shadcn/ui setup:

- Component directory: `src/components/ui`
- Global stylesheet: `src/assets/styles/globals.css`
- Aliases such as `@/components` and `@/lib`

To add new components, use the shadcn CLI as needed and keep generated UI components under `src/components/ui`.

## WebExt Core

This template includes the following WebExt Core packages:

- `@webext-core/messaging`
- `@webext-core/storage`

They are useful for:

- Messaging between popup, background, and content scripts
- Extension storage abstraction

Basic examples are already included in:

- `src/utils/messaging.ts`
- `src/utils/storage.ts`

## Default Configuration

- Uses Manifest V3
- React and auto-icons modules are enabled
- Output directory is `dist/<browser>-mv<manifestVersion>`
- Default extension permissions include `storage`
- Default `host_permissions` is `<all_urls>`

If you want to change the extension name, description, permissions, or build behavior, edit `wxt.config.ts`.

## Documentation

- shadcn/ui: https://ui.shadcn.com/
- WebExt Core: https://webext-core.aklinker1.io/
- WXT: https://wxt.dev/

## Suggested Workflow

1. Build your main UI in `src/entrypoints/popup/App.tsx`
2. Add shadcn/ui components under `src/components/ui` as needed
3. Put extension logic in `background.ts` and `content.ts`
4. Use WebExt Core to connect state and communication across entrypoints

## License

This template is provided as a starter. Add the license information that fits your project.
