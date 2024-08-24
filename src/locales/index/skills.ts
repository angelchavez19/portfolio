import Astro from "~/components/icon/astro.astro";
import Django from "~/components/icon/django.astro";
import FastAPI from "~/components/icon/fastapi.astro";
import Figma from "~/components/icon/figma.astro";
import Git from "~/components/icon/git.astro";
import Github from "~/components/icon/github.astro";
import Nuxt from "~/components/icon/nuxt.astro";
import React from "~/components/icon/react.astro";
import Vue from "~/components/icon/vue.astro";

const frontendSkills = [
  { title: "React", icon: React },
  { title: "Vue", icon: Vue },
  { title: "Astro", icon: Astro },
];

const backendSkills = [
  { title: "Nuxt", icon: Nuxt },
  { title: "Django", icon: Django },
  { title: "FastAPI", icon: FastAPI },
];

const toolsSkills = [
  { title: "Git", icon: Git },
  { title: "Github", icon: Github },
  { title: "Figma", icon: Figma },
];

export const technicalSkills = [
  {
    class: "frontend",
    subtitle: { en: "Frontend", es: "Frontend" },
    skills: frontendSkills,
  },
  {
    class: "backend",
    subtitle: { en: "Backend", es: "Backend" },
    skills: backendSkills,
  },
  {
    class: "tools",
    subtitle: { en: "Tools", es: "Herramientas" },
    skills: toolsSkills,
  },
];
