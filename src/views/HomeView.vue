<!--
 * @Author: paulWong
 * @LastEditors: paulWong
 * @Description: 页面头部注释
-->
<script setup lang="ts">
const handleClickMini = () => {
    AMessage.info('hello arcoDesign');
};
</script>

<template>
    <main>
        <a-space>
            <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
            <a-button type="primary" size="small" @click="handleClickMini">Small</a-button>
            <a-button type="primary" @click="handleClickMini">Medium</a-button>
            <a-button type="primary" size="large" @click="handleClickMini">Large</a-button>
        </a-space>
        <HelloWorld />

        <!-- 使用库 -->
        <icon-bx-bowl-rice class="" />
        <!-- 使用自定义SVG -->
        <icon-home-ant-design-bank-twotone class="" />
        <icon-user-uil-bitcoin />

        <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white" font="mono light" p="y-2 x-4" border="2 rounded blue-200">Button</button>
    </main>
</template>
