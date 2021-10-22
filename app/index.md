---
page: true
date: 2021-06-30
title: home
sidebar: false
---
<script setup>
import Page from "./.vitepress/theme/components/Page.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(0,20)
</script>
<Page :posts="posts" />
