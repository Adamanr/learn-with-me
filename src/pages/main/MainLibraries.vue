<template>
  <Card title="Библиотека" class=" w-full">
    <div class="grid lg:grid-cols-5 pe-4 grid-cols-3 gap-2 w-full">
      <div class="relative w-full card lg:h-56 h-28 flex p-2 m-2 " v-for="n in 5"
           style="background:linear-gradient(180deg, rgba(9, 0, 0, 0.45) 25.84%,  rgba(143, 143, 143, 0) 56.24%, rgba(0, 0, 0, 0.4) 85.39%),url('https://sun9-35.userapi.com/impg/DQ_z02VbPL8pVxf-LyQVgcF2cAw4xhWHbbinQA/WPxY7j-VqmA.jpg?size=736x736&quality=95&sign=d60b49ce678c103313b7e37f685ff4fe&type=album'); background-repeat: no-repeat; background-size: 100%">
        <h1 class="absolute bottom-5">Изучение Rust</h1>
      </div>
    </div>

  </Card>

</template>

<script setup>
import Card from '../../components/Card/Card.vue';


</script>

<style lang="scss" scoped>

</style>
