<template>
    <Layout />
<!--    <Comment/>-->
    <Copyright />
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'
import Comment from "./Comment.vue";
import Copyright from './Copyright.vue'
const { Layout } = DefaultTheme
</script>
