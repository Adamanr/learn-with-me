<template>
  <Card class="list" title="Ваши плейлисты">
    <div class="courses">
      <div v-for="course in courses">
        <CourseCard v-bind:title="course.title" v-bind:description="course.description" v-bind:photo="course.photo" />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '@/components/Card/Card.vue';
import CourseCard from '@/components/CourseCard/CourseCard.vue';
import { coursesMock } from '@/mock/courses';

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
  display: flex;
  justify-content: center;

  padding: 20px 20px;
  gap: 10px;
}
</style>
