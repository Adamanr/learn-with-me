<script setup>
import PageLayout from '../../layouts/PageLayout/PageLayout.vue';
import CourseListCard from '../../components/CourseCard/CourseListCard.vue';
import SearchInput from '../../components/SearchInput/SearchInput.vue';
</script>

<template>
    <PageLayout class="">
        <div class="p-2 bg-[#232832] flex rounded-lg">
            <SearchInput />
            <div class="w-12 border rounded-lg border-[#424853] ms-2">
                <img src="../../assets/filter.svg" class="w-12 p-2"/>
            </div>
        </div>
        <div class="grid gap-4 grid-cols-3">
            <div v-for="n in 10">
                <CourseListCard/>
            </div>
        </div>
    </PageLayout>
</template>
  
<style lang="scss" scoped></style>
  
  
  