<template>
  <div class="Projects-project">
    <img :src="project.image" :alt="project.name" />
    <div class="Projects-project-content">
      <p>{{ project.date }} • {{ project.duration }}</p>
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="Projects-project-content-technologies">
        <p v-for="tech in project.technologies">{{ tech }}</p>
      </div>
      <div class="Projects-project-content-links">
        <div class="Projects-project-content-links-link" v-for="link in links">
          <component :is="link.icon" />
          <a :href="link.href" target="_blank" rel="noopener noreferrer">
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ProjectI } from "~/interfaces/project";

interface Props {
  project: ProjectI;
  lang: string;
}

import Blog from "~/components/icon/blog.vue";
import Github from "~/components/icon/github.vue";
import Demo from "~/components/icon/demo.vue";
import Web from "~/components/icon/web.vue";

const props = defineProps<Props>();

const getLinks = (project: ProjectI) => {
  let links = [];

  if (project.blog_link)
    links.push({
      icon: Blog,
      href: `/${props.lang === "es" ? "es" : ""}/${props.project.blog_link}`,
      text: "Blog",
    });

  if (project.github_link)
    links.push({
      icon: Github,
      href: props.project.github_link,
      text: "Repo",
    });

  if (project.demo_link)
    links.push({
      icon: Demo,
      href: props.project.demo_link,
      text: "Demo",
    });

  if (project.website_link)
    links.push({
      icon: Web,
      href: props.project.website_link,
      text: "Web",
    });
  return links;
};

const links = getLinks(props.project);
</script>

<style scope>
.Projects-project {
  display: flex;
  flex-direction: column;
  background-color: #272727;
  width: 280px;
  overflow: hidden;
  border-radius: 20px;
}

.Projects-project img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.Projects-project-content {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: calc(100% - 1rem);
  padding: 0.5rem;
}

.Projects-project-content h3 {
  color: #14e956;
  font-size: 1.3rem;
}

.Projects-project-content p {
  font-size: 1rem;
  color: #fff;
}

.Projects-project-content-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.Projects-project-content-technologies p {
  background-color: #14e956;
  padding: 0.1rem 0.3rem;
  border-radius: 20px;
  color: #050810;
}

.Projects-project-content-links {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
}

.Projects-project-content-links-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.Projects-project-content-links-link svg {
  width: 28px;
  height: 28px;
}

.Projects-project-content-links-link a {
  color: #fff;
  font-size: 0.9rem;
}
</style>
