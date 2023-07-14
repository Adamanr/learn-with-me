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
import Card from '@/components/Card.vue';
import CourseCard from '@/components/CourseCard.vue';

export default {
  components: { CourseCard, Card },
  data() {
    return {
      courses: [
        {
          _id: 1,
          title: 'Изучение Go',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый...',
          photo: 'https://www.film.ru/sites/default/files/filefield_paths/154.jpg',
        },
        {
          _id: 2,
          title: 'Изучение Go',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый...',
          photo: 'https://www.film.ru/sites/default/files/filefield_paths/154.jpg',
        },
        {
          _id: 3,
          title: 'Изучение Go',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый...',
          photo: 'https://www.film.ru/sites/default/files/filefield_paths/154.jpg',
        },
      ],
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
