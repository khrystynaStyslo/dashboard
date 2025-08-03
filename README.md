# Dashboard

A lightweight, extensible dashboard built with **React** using **pure CSS** and structured with **FSD architecture**.  
Data is fully **mocked**; drag-and-drop is enabled for positioning blocks. Swapping blocks is intentionally **disabled**. You can add line, bar, and text blocks via UI controls.

## Features
- **Three block types**
    - **Line chart** block
    - **Bar chart** block
    - **Text** block
- **Mocked data**
- **Add new blocks** via buttons
- **Drag and drop** positioning using `@dnd-kit/core`
- **Block swapping disabled** (you can drag blocks but they won’t swap places automatically)
- **FSD (Feature-Sliced Design)** architecture
- **Built with Vite + React**
- **Styling**: plain, lightweight CSS (no CSS-in-JS, no preprocessors)

## Tech Stack

- ⚛️ React
- 🚀 Vite
- 🎨 Pure CSS
- 📦 `@dnd-kit/core` for drag-and-drop
- 🧱 FSD architecture for clear separation of concerns

## Getting Started

### Installation

```bash
    # install dependencies (example with pnpm)
    pnpm i
    # or with yarn
    yarn
    # or with npm
    npm install
```

### Development

```bash
    # start the development server
    pnpm dev
    # or
    yarn dev
    # or
    npm run dev
```

### Full code quality gate (lint + format-check)
```bash
    pnpm code-quality
    # or
    yarn code-quality
    # or
    npm run code-quality
```