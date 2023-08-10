<template>
  <Card class="list" title="Ваши плейлисты">
    <div class="courses grid grid-cols-3">
      <div v-for="course in courses" class="pt-2 p-1">
        <CourseCard v-bind:title="course.title" v-bind:description="course.description" v-bind:photo="course.photo" />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '../../components/Card/Card.vue';
import CourseCard from '../../components/CourseCard/CourseCard.vue';
import { coursesMock } from '../../mock/courses';

export default {
  components: { CourseCard, Card },
  data() {
    return {
      courses: coursesMock,
    };
  },
};
</script>

<style lang="scss" scoped>
.courses {

}
</style>
