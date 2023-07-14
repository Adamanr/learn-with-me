<template>
  <div class="container">
    <div v-for="star in range(5)">
      <IconStarFilled :color="star >= rating ? '#424853' : '#09c097'" />
    </div>
  </div>
</template>

<script>
import { IconStarFilled } from '@tabler/icons-vue';
import { range } from 'lodash-es';

export default {
  props: {
    rating: {
      type: Number,
    },
  },
  methods: { range },
  components: { IconStarFilled },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  gap: 2px;
  padding-top: 10px;
}
</style>
