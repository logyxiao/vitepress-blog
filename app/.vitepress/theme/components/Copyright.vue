<template>
    <div class="site-footer">
        MIT Licensed | Copyright © 2021 <a class="vitepress" :href="website">{{ webTitle }}</a
        ><br />
        Powered by
        <a class="vitepress" target="_blank" href="//vitepress.vuejs.org/">VitePress</a>
    </div>
    <!--    谷歌统计脚本-->
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6PHKRN"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { site, theme } = useData()
const website = theme.value.website
const webTitle = site.value.title
</script>

<style>
.site-footer {
    color: #999;
    height: 50px;
    text-align: center;
    font-size: 0.75rem;
    width: 100vw;
}
.vitepress {
    color: #222;
    font-weight: 700;
}
</style>
