<template>
  <div class="search-container">
    <div class="search-icon">
      <IconSearch color="var(--color-secondary)" :size="22" />
    </div>
    <input class="search-input" placeholder="Поиск" />
  </div>
</template>

<script>
import { IconSearch } from '@tabler/icons-vue';

export default {
  components: { IconSearch },
};
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  height: 45px;
  width: 100%;
  padding: 0 10px;
  position: relative;
}

.search-icon {
  min-width: 40px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input {
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 40px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: var(--color-tertiary);
  }

  &::placeholder {
    color: var(--color-secondary);
  }
}
</style>
