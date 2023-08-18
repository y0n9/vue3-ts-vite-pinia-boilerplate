/*
 * @Author: paulWong
 * @LastEditors: paulWong
 * @Description: 页面头部注释
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: {
        // 浏览器环境
        browser: true,
        // node环境
        node: true,
        // 启用出了modules以外的所有ECMAScript 6特性
        es2021: true
    },
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
    rules: {
        'no-debugger': 'warn', // 禁止出现 debugger
        '@typescript-eslint/no-explicit-any': 'off' // 允许 any 类型
    },
    extends: [
        './.eslintrc-auto-import.json',
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/eslint-config-prettier/skip-formatting',
        'prettier',
        'plugin:prettier/recommended'
    ]
};
