<template>
  <button type="button" :id="id" aria-label="Gmail" @click="handleClick">
    <svg viewBox="0 0 16 16" fill="#fff">
      <path
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 4h8q.216.001.409.088L8 9.231 3.591 4.088A1 1 0 0 1 4 4m-1 7V5l.002-.063 2.932 3.421-2.9 2.9A1 1 0 0 1 3 11m9 1H4q-.133 0-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a1 1 0 0 1-.258.034zm1-1q0 .133-.034.258l-2.9-2.9 2.932-3.421L13 5z"
      ></path>
    </svg>
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ lang: "en" | "es"; id?: string; text?: string }>();

const gmail = "infoangelchavez@gmail.com";

const handleClick = () => {
  navigator.clipboard
    .writeText(gmail)
    .then(() => {
      alert(
        props.lang === "es"
          ? "Se copió en el portapapeles"
          : "Copied to clipboard"
      );
    })
    .catch(() => {
      alert(
        props.lang === "es"
          ? `Error al copiar: ${gmail}`
          : `Failed to copy: ${gmail}`
      );
    });
};
</script>
