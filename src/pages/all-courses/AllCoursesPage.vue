<template>
  <PageLayout>
    <Card class="card">
      <SearchInput />
    </Card>
    <AllCoursesList />
  </PageLayout>
</template>

<script>
import PageLayout from '../../layouts/PageLayout/PageLayout.vue';
import Card from '../../components/Card/Card.vue';
import SearchInput from '../../components/SearchInput/SearchInput.vue';
import AllCoursesList from '../../pages/all-courses/AllCoursesList.vue';

export default {
  components: { AllCoursesList, SearchInput, Card, PageLayout },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 15px;
  border: none;
}
</style>
