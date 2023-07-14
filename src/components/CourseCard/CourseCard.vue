<template>
  <div :class="{ card: true, full: fullContent }">
    <img v-bind:src="photo" class="photo" />
    <div class="body">
      <div class="main-info">
        <div class="title">
          {{ title }}
        </div>
        <div class="description">
          {{ description }}
        </div>
      </div>

      <div v-if="fullContent">
        <div class="course-info">
          <div class="user">от: <span>papich228</span></div>
          <div class="views">24.000 просмотров</div>
        </div>
        <Rating :rating="3" />
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating/Rating.vue';

export default {
  components: { Rating },
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
    fullContent: {
      type: Boolean,
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

  &.full {
    height: 480px;

    .photo {
      height: 250px;
    }

    .body {
      background: #232832;
    }
  }

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
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .main-info {
    }

    .title {
      font-size: 18px;
      font-weight: 600;
    }

    .description {
      color: #9ca1ac;
      font-size: 14px;
    }
  }

  .course-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: var(--font-color-gray);

    .user {
      span {
        color: var(--font-color-light);
      }
    }

    .views {
    }
  }
}
</style>
