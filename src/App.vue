<script setup>
import Header from './components/Header.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <Header />

  <!-- <RouterLink to="/">Home</RouterLink> -->

  <RouterView />
</template>

<style scoped></style>
