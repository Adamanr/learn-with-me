<template>
  <div class="courses">
    <div v-for="course in courses">
      <CourseCard
        class="card"
        :fullContent="true"
        :title="course.title"
        :description="course.description"
        :photo="course.photo"
      />
    </div>
  </div>
</template>

<script>
import { coursesMock } from '../../mock/courses';
import CourseCard from '../../components/CourseCard/CourseCard.vue';

export default {
  components: { CourseCard },
  data() {
    return {
      courses: coursesMock,
    };
  },
};
</script>

<style lang="scss" scoped>
.courses {
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr;
}

.card {
  width: 100%;
}
</style>
