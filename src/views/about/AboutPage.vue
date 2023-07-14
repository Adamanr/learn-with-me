<template>
  <div class="main mt-10 max-w-7xl mx-auto h-full container">
    <div class="grid">
      <AboutCourses />
      <AboutBestCourses />
    </div>
    <AboutLibraries />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 7fr 5fr;
}
</style>

<script setup>
import AboutCourses from '@/views/about/AboutCourses.vue';
import AboutBestCourses from '@/views/about/AboutBestCourses.vue';
import AboutLibraries from '@/views/about/AboutLibraries.vue';
</script>
