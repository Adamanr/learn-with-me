<template>
  <Card title="Библиотека" class="best-list">
    <div class="content"></div>
  </Card>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: { Card },
};
</script>

<style lang="scss" scoped>
.content {
  height: 200px;
}
</style>
