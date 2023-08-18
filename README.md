# vue3-ts-vite-pinia-boilerplate

这是一个集成vue3+vueRouter+ts+vite+pinia+esling+prettier+vueuse+arcoDesign+unplugin-icons+UnoCSS 的模板

1.使用 commitizen 规范git提交（注意：需要自己全局安装commitizen ----- pnpm install -g commitizen ）

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

[VSCode](https://code.visualstudio.com/) + [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 使得在使用unplugin-icons 库时，可以直接在 VSCode 中预览到图标，超级方便

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 配置参考
1. [这是一份保姆级Vue3+Vite实战教程](https://juejin.cn/post/7147353734912147470)
2. [手把手教你用 vite + vue3 + ts + pinia + vueuse 打造企业级前端项目](https://juejin.cn/post/7079785777692934174)
3. [vue3 解决 ESLint 各类型错误](https://juejin.cn/post/7120531627964399629)
4. [ts封装axios最佳实践示例详解](https://github.com/kvchen95/blog/blob/master/packages/axios/)
