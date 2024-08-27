<template>
  <section class="Filter">
    <nav class="Filter-nav">
      <button
        @click="resetFilter"
        :class="activeTechnologies.length ? '' : '--active'"
      >
        {{ allText }}
      </button>
      <button
        v-for="tech in TechSkills"
        @click="handleFilter(tech)"
        :class="activeTechnologies.includes(tech) ? '--active' : ''"
      >
        {{ tech }}
      </button>
    </nav>
  </section>
  <section class="Projects">
    <div class="Projects-container">
      <Project
        v-for="(project, key) in filterProjects"
        :lang="lang"
        :project="project"
        :key="key"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectI } from "~/interfaces/project";
const props = defineProps<{ lang: "es" | "en" }>();

import { ref, type Ref } from "vue";
import TechSkills from "~/locales/index/projects/tech.json";
import AllProjectsEN from "~/locales/index/projects/en.json";
import AllProjectsES from "~/locales/index/projects/es.json";
import Project from "./project.vue";

const allText = props.lang === "es" ? "Todos" : "All";
const allProjects: ProjectI[] =
  props.lang === "es" ? AllProjectsES : AllProjectsEN;

const filterProjects: Ref<ProjectI[]> = ref(allProjects);
const activeTechnologies: Ref<string[]> = ref([]);

const resetFilter = () => {
  filterProjects.value = allProjects;
  activeTechnologies.value = [];
};

const handleFilter = (tech: string) => {
  if (activeTechnologies.value.includes(tech))
    activeTechnologies.value = activeTechnologies.value.filter(
      (t) => t !== tech
    );
  else activeTechnologies.value.push(tech);

  if (activeTechnologies.value.length === 0) filterProjects.value = allProjects;
  else
    filterProjects.value = allProjects.filter((project) =>
      activeTechnologies.value.every((activeTech) =>
        project.technologies.includes(activeTech)
      )
    );
};
</script>

<style scoped>
.Filter {
  width: 100%;
}

.Filter-nav {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  background-color: #272727;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  gap: 1rem;
}

.Filter-nav button {
  background-color: #050810;
  padding: 0.2rem 0.7rem;
  color: #fff;
  border-radius: 20px;
  border: none;
}

.Filter-nav button.--active {
  background-color: #14e956;
  color: #050810;
}

.Projects {
  margin-top: 40px;
}

.Projects-container {
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
}
</style>
