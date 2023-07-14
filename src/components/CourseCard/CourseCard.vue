<template>
  <div class="card">
    <img v-bind:src="photo" class="photo" />
    <div class="body">
      <div class="title">
        {{ title }}
      </div>
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 220px;
  border-radius: 5px;
  border: 2px solid var(--border-color);
  overflow: hidden;
  cursor: pointer;
  transition: border 0.2s;

  &:hover {
    border-color: var(--color-tertiary);
  }

  .photo {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .body {
    padding: 12px;
    border-top: 2px solid var(--border-color);
    transition: border 0.2s;

    .title {
      font-size: 18px;
      font-weight: 600;
    }

    .description {
      color: #9ca1ac;
      font-size: 14px;
    }
  }
}
</style>
