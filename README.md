# vite-plugin-node

> A Vite plugin to polyfill Node.js standard library modules for browser usage.

[![npm version](https://img.shields.io/npm/v/vite-plugin-node.svg)](https://www.npmjs.com/package/vite-plugin-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

`vite-plugin-node` is a Vite plugin that automatically polyfills Node.js standard library modules (like `Buffer`, `process`, `global`) for browser environments. This enables you to use packages that depend on Node.js built-ins in your browser-based Vite applications without manual configuration.

## Features

- 🔄 **Automatic Polyfills**: Seamlessly polyfills Node.js globals (`Buffer`, `process`, `global`)
- 📦 **Standard Library Support**: Provides browser-compatible implementations of Node.js standard library modules
- ⚡ **Vite Integration**: Optimized for both development and production builds
- 🎯 **Zero Configuration**: Works out of the box with minimal setup
- 🔧 **Rolldown & OXC Support**: Configured for Vite's modern build tooling

## Installation

```bash
npm install vite-plugin-node
# or
pnpm add vite-plugin-node
# or
yarn add vite-plugin-node
```

## Usage

### Basic Setup

Add the plugin to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import { stdlib } from 'vite-plugin-node'

export default defineConfig({
  plugins: [
    stdlib(),
  ],
})
```

That's it! Now you can use Node.js globals and standard library modules in your browser code:

```typescript
// These will work in the browser
console.log(Buffer.from('hello'))
console.log(process.env)
console.log(global)
```

### With Vue

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { stdlib } from 'vite-plugin-node'

export default defineConfig({
  plugins: [
    vue(),
    stdlib(),
  ],
})
```

### With React

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { stdlib } from 'vite-plugin-node'

export default defineConfig({
  plugins: [
    react(),
    stdlib(),
  ],
})
```

## How It Works

The plugin provides three main polyfills:

### Buffer
Polyfills the Node.js `Buffer` API using the [buffer](https://github.com/feross/buffer) package, making it available globally in the browser.

### process
Polyfills the Node.js `process` object using the [process](https://github.com/defunctzombie/node-process) package, providing access to `process.env`, `process.nextTick()`, etc.

### global
Polyfills the Node.js `global` object by mapping it to `globalThis` (or `this`/`self` for older environments).

### Standard Library Modules
Uses [node-stdlib-browser](https://github.com/niksy/node-stdlib-browser) to provide browser-compatible implementations of Node.js built-in modules like:
- `path`
- `fs`
- `stream`
- `crypto`
- `events`
- And many more...

## Advanced Usage

### Direct Imports

You can also import polyfills directly:

```typescript
import Buffer from 'vite-plugin-node/buffer'
import process from 'vite-plugin-node/process'
import global from 'vite-plugin-node/global'
```

### Exported Configurations

The plugin exports several configurations for advanced use cases:

```typescript
import { 
  stdlib,        // The main plugin
  alias,         // Module aliases for Node.js standard library
  define,        // Global definitions
  rolldownInject,// Rolldown injection configuration
  oxcInject,     // OXC injection configuration
  banner,        // Banner code for global initialization
} from 'vite-plugin-node'
```

## Peer Dependencies

- `vite` >= 8.0.0-beta.11

## Development

```bash
# Install dependencies
pnpm install

# Build the plugin
pnpm build

# Build inject files
pnpm inject

# Run the demo
pnpm dev

# Build demo for production
pnpm demo:build

# Preview production build
pnpm demo:preview
```

## Use Cases

This plugin is particularly useful when:

- Using packages that depend on Node.js built-ins in browser environments
- Migrating Node.js code to run in the browser
- Working with crypto, buffer, or stream operations in the browser
- Building isomorphic applications that share code between Node.js and browser

## Comparison with Similar Tools

Unlike `vite-plugin-node-polyfills`, this plugin is specifically designed to work with Vite 8+ and leverages modern build tools like Rolldown and OXC for optimal performance and compatibility.

## License

MIT © [Jinjiang](https://github.com/Jinjiang)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you encounter any issues or have questions, please file them in the [issues section](https://github.com/Jinjiang/vite-plugin-node/issues).
