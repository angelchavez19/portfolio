<template>
  <form class="ContactForm" @submit.prevent="handleSubmit">
    <div>
      <label for="name">{{ lang === "es" ? "Nombre" : "Name" }}</label>
      <input type="text" name="name" id="name" v-model="name" />
      <p v-show="showError && nameError">{{ nameError }}</p>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <p v-show="showError && emailError">{{ emailError }}</p>
    </div>
    <div>
      <label for="message">{{ lang === "es" ? "Mensaje" : "Message" }}</label>
      <textarea name="message" id="message" v-model="message"></textarea>
      <p v-show="showError && messageError">{{ messageError }}</p>
    </div>
    <input type="submit" :value="lang === 'es' ? 'Enviar' : 'Send'" />
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{ lang: "en" | "es" }>();

import { computed, ref, type ComputedRef, type Ref } from "vue";

const name: Ref<string> = ref("");
const email: Ref<string> = ref("");
const message: Ref<string> = ref("");

const messageEmptyField =
  props.lang === "es"
    ? "El campo no debe estar vacío."
    : "The field must not be empty.";

const messageInvalidEmail =
  props.lang === "es"
    ? "El campo debe ser un correo válido."
    : "The field must be a valid email.";

const nameError: ComputedRef<string> = computed(() => {
  if (!name.value.trim().length) return messageEmptyField;
  return "";
});
const emailError: ComputedRef<string> = computed(() => {
  if (!email.value.trim().length) return messageEmptyField;
  if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())
  )
    return messageInvalidEmail;
  return "";
});
const messageError: ComputedRef<string> = computed(() => {
  if (!message.value.trim().length) return messageEmptyField;
  return "";
});

const showError: Ref<boolean> = ref(false);

const error: ComputedRef<boolean> = computed(
  () =>
    !name.value.trim().length ||
    !!nameError.value.length ||
    !email.value.trim().length ||
    !!emailError.value.length ||
    !message.value.trim().length ||
    !!messageError.value.length
);

const handleSubmit = () => {
  showError.value = true;

  if (error.value) return;

  name.value = "";
  email.value = "";
  message.value = "";

  //   TODO: Send data
};
</script>

<style scoped>
.ContactForm {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}

.ContactForm div {
  display: flex;
  flex-direction: column;
  width: 250px;
  gap: 0.3rem;
}

.ContactForm div label {
  color: #fff;
  font-size: 1.2rem;
}

.ContactForm div input,
.ContactForm div textarea {
  width: calc(250px - 1.4rem);
  padding: 0.4rem 0.7rem;
  border-radius: 15px;
  border: 0;
  font-family: "Inter", sans-serif;
  color: #050810;
  font-size: 1.2rem;
}

.ContactForm div textarea {
  min-width: calc(250px - 1.4rem);
  max-width: calc(250px - 1.4rem);
  min-height: 100px;
  height: 100px;
  max-height: 300px;
}

.ContactForm div p {
  color: #f00;
  font-size: 1.2rem;
}

.ContactForm input[type="submit"] {
  width: 250px;
  border: none;
  padding: 0.5rem 0.7rem;
  background-color: #107f35;
  border-radius: 15px;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.ContactForm input[disabled] {
  background-color: #22ca5a3a;
}
</style>
