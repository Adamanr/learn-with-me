<script setup></script>

<template>
  <header class="w-full">
    <div class="header border-b-2 border-b-[#B3B3B3] flex">
      <h1 class="flex-1 pt-6 ps-12 text-3xl text-white font-bold">Learn With Me</h1>
      <div class="ms-2 flex p-4">
        <img class="me-4 w-10 h-10 p-2" src="../../assets/bell.svg" />
        <img
          class="w-10 h-10 rounded-lg bg-gray-200"
          src="https://sun9-48.userapi.com/impg/tOX_17XaHfP8hBkC1y7C3WG1D0UzkpEUXgDp2g/TxoyM5xbD1Q.jpg?size=564x564&quality=95&sign=1abfa9d4ab21347c1bf6d81ec8da88be&type=album"
        />
      </div>
    </div>
    <div class="flex menu ps-10 text-[#B3B3B3]">
      <div class="flex flex-wrap gap-8  text-2xl flex-1">
        <a href="/" class="flex p-2">
          <img src="../../assets/home.svg" />
          <p class="ps-2">Главная</p>
        </a>
        <a href="/courses" class="flex p-2">
          <img src="../../assets/list.svg" />
          <p class="ps-2">Курсы</p>
        </a>
        <a href="" class="flex p-2">
          <img src="../../assets/book.svg" />
          <p class="ps-2">Библиотека</p>
        </a>
      </div>
      <a href="" class="flex text-2xl p-2 pe-4">
        <img src="../../assets/star.svg" />
        <p class="ps-2">Избранное</p>
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #232832;
}

.menu {
  background-color: #232832;
}
</style>
