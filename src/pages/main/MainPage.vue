<template>
  <PageLayout class="p-4 ">
    <div class="grid gap-4 lg:grid-cols-2 grid-cols-1">
      <AboutCourses />
      <AboutBestCourses />
    </div>
    <AboutLibraries class="mt-4" />
  </PageLayout>
</template>

<style lang="scss" scoped>


</style>

<script setup>
import AboutCourses from '../../pages/main/MainCourses.vue';
import AboutBestCourses from '../../pages/main/MainBestCourses.vue';
import AboutLibraries from '../../pages/main/MainLibraries.vue';
import PageLayout from '../../layouts/PageLayout/PageLayout.vue';
import SearchInput from '../../components/SearchInput/SearchInput.vue';
</script>
