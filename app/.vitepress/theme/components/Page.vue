<template>
  <div class="list-wrap">
    <div v-for="(article, index) in posts" :key="index" class="list">
      <a
          :href="withBase(article.regularPath)"
          class="article"
      >
        <div class="article-header">
          <div class="title">
            {{ article.frontMatter.title || "" }}
          </div>
          <time datetime="2020-10-25" class="date">
            {{ article.frontMatter.date || "" }}
          </time>
        </div>

        <!--        <div class="line"></div>-->
        <!--        <p class="describe">-->
        <!--          {{ article.frontMatter.describe || "" }}-->
        <!--        </p>-->
      </a>
    </div>
    <a class="read-more" href="/pages/archives"
    >查看所有文章→</a>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
const props = defineProps({
    posts: Array,
})
</script>

<style scoped>
.list-wrap{
  margin: 20px auto;
}
.read-more{
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding-top: 20px;
  text-align: right;
  font-size: 14px;
  color: #3767b3;
  display: block;
}
.article {
  display: block;
  //border-bottom: 1px solid #e5e5e5;
  color: #555;
  padding: 0;
  width: 700px;
  margin: 0 auto;
}
.article-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.date {
  color: #23407d;
  letter-spacing: 0.5px;
}
.title {
  flex: 1;
  color: #353535;
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin: 0.5rem 0;
}
.line {
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  border-top: 0.2rem solid #353535;
  display: block;
  width: 2rem;
}
.article:hover .line {
  width: 5rem;
}
@media screen and (max-width: 720px) {
  .article{
    padding: 1rem 0;
  }
  .title {
    font-size: 1.1rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 14em;
  }
  .describe {
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding: 0 0.5em;
  }
  .date {
    font-size: 14px;
  }
  .line {
    border-top: 0.15rem solid #353535;
  }
}
</style>
