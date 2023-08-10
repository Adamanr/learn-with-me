import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '/src/pages/main/MainPage.vue';
import AllCoursesPage from '/src/pages/all-courses/AllCoursesPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/courses',
      name: 'courses',
      component: AllCoursesPage,
    },
  ],
});

export default router;
