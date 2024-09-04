<template>
  <div class="Header-selectLanguage">
    <div>
      <Lang />
      <button type="button" @click="() => toogleSelect()">
        {{ lang }}
      </button>
    </div>
    <menu class="Header-select" v-show="showSelect">
      <li><a :href="hrefEN">English</a></li>
      <li><a :href="hrefES">Español</a></li>
    </menu>
  </div>
</template>

<script setup lang="ts">
defineProps<{ lang: "en" | "es" }>();

import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";

const showSelect: Ref<boolean> = ref(false);

import Lang from "~/components/icon/lang.vue";

const switchLang = (locale: "en" | "es") => {
  const path = window.location.pathname;
  const hash = window.location.hash;

  if (locale === "en")
    return path.startsWith("/es/") ? path.substring(3) + hash : path + hash;

  if (locale === "es")
    return path.startsWith("/es/") ? path + hash : `/es${path}${hash}`;

  return path + hash;
};

const hrefEN: Ref<string> = ref(switchLang("en"));
const hrefES: Ref<string> = ref(switchLang("es"));

const toogleSelect = (newValue = !showSelect.value) => {
  hrefEN.value = switchLang("en");
  hrefES.value = switchLang("es");
  showSelect.value = newValue;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const button = target.closest(".Header-selectLanguage button");
  const menu = target.closest(".Header-select");
  if (!button && !menu) toogleSelect(false);
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.Header-selectLanguage {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
}

.Header-selectLanguage div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.Header-selectLanguage div svg {
  width: 20px;
  height: 20px;
}

.Header-selectLanguage div button {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.Header-select {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  background: #272727;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  outline: 1px solid #454545;
}

.Header-select li {
  list-style: none;
  background-color: #272727;
}

.Header-select li a {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
}

@media (min-width: 900px) {
  .Header-select {
    display: flex;
    position: absolute;
    top: 60px;
    left: auto;
    right: 0;
    width: 200%;
  }
}
</style>
