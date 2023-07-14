<script>
import { VueElement } from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="header">
      <div class="header-title">{{ title }}</div>
      <div class="header-link"></div>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background: #232832;

  .header {
    height: 40px;

    .header-title {
      background: var(--color-tertiary);
      width: fit-content;
      height: 100%;
      font-size: 18px;
      display: flex;
      align-items: center;
      clip-path: polygon(100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 0);
      padding-left: 15px;
      padding-right: 20px;
      text-transform: capitalize;
      color: #000;
    }

    .header-link {
    }
  }

  .body {
  }
}
</style>
