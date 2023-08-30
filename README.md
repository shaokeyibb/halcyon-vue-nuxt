# halcyon-vue-nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt support for [halcyon-vue](https://github.com/halcyon-vue/halcyon-vue)

## Usage

1. Add `halcyon-vue-nuxt` dependency to your project

```bash
# Using pnpm
pnpm install halcyon-vue-nuxt

# Using yarn
yarn add halcyon-vue-nuxt

# Using npm
npm install halcyon-vue-nuxt
```

2. Add `halcyon-vue-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'halcyon-vue-nuxt'
  ]
})
```

That's it! You can now use `halcyon-vue-nuxt` in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/halcyon-vue-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/halcyon-vue-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/halcyon-vue-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/halcyon-vue-nuxt

[license-src]: https://img.shields.io/npm/l/halcyon-vue-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/halcyon-vue-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
