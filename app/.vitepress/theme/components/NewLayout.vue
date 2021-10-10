<template>
    <Layout />
    <Comment v-show="isShow" />
    <Copyright />
</template>
<script setup>
import DefaultTheme from 'vitepress/theme'
import Comment from "./Comment.vue";
import Copyright from './Copyright.vue'
const { Layout } = DefaultTheme
const isShow =  window.location.href.includes('/posts')
</script>
