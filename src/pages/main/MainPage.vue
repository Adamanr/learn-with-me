<template>
  <PageLayout>
    <div class="grid">
      <AboutCourses />
      <AboutBestCourses />
    </div>
    <AboutLibraries />
  </PageLayout>
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
import AboutCourses from '@/pages/main/MainCourses.vue';
import AboutBestCourses from '@/pages/main/MainBestCourses.vue';
import AboutLibraries from '@/pages/main/MainLibraries.vue';
import PageLayout from '@/layouts/PageLayout/PageLayout.vue';
</script>
