<template>
  <article class="Blog" v-for="blog in allBlogs" :key="blog.title">
    <header class="Blog-header">
      <h2>{{ blog.title }}</h2>
    </header>
    <section class="Blog-content">
      <article
        class="Blog-content-article"
        v-for="post in blog.content"
        :key="post.slug"
      >
        <header class="Blog-content-header">
          <h3>
            <a :href="getHrefForSlug(post.slug)" :title="post.name">
              {{ post.name }}
            </a>
          </h3>
          <p>
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </p>
        </header>
        <p>{{ post.description }}</p>
      </article>
    </section>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ lang: "en" | "es" }>();

import type { BlogI } from "~/interfaces/post";
import AllBlogsEN from "~/locales/blog/en.json";
import AllBlogsES from "~/locales/blog/es.json";

const allBlogs: BlogI[] = props.lang === "es" ? AllBlogsES : AllBlogsEN;

const getHrefForSlug = (slug: string) => {
  if (props.lang === "es") return `/es/${slug}`;
  return `/${slug}`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(
    props.lang === "es" ? "es-ES" : "en-US"
  );
};
</script>

<style scoped>
.Blog {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
}

.Blog-header h2 {
  color: #14e956;
  font-size: 1.8rem;
}

.Blog-content {
  width: 100%;
  padding-left: 0.3rem;
  margin-top: 0.7rem;
  border-left: 1px solid #177f35;
  box-sizing: border-box;
}

.Blog-content:hover {
  border-left: 2px solid #14e956;
}

.Blog-content-article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 0.4rem;
  border-left: 1px solid #177f35;
  width: 100%;
  box-sizing: border-box;
}

.Blog-content-article:hover {
  border-left: 2px solid #14e956;
}

.Blog-content-header {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.Blog-content-header h3 a {
  color: #14e956;
  font-size: 1.4rem;
  text-decoration: none;
}

.Blog-content-article:hover h3 a {
  text-decoration: underline;
}
</style>
