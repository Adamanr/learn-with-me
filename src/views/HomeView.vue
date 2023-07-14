<script setup>
</script>

<template>
  <div class="main max-w-7xl mx-auto h-full">
    <div class="grid lg:grid-cols-2 grid-cols-1 w-full  gap-4">
      <div class="block">
        <p class="bg-[#09C097] text-white rounded-br-lg text-center font-bold w-1/3 text-xl p-2">Ваши плейлисты</p>
        <div class="grid pt-3 grid-cols-3 h-full">
          <div class="m-2 h-full border-[rgb(66,72,83)] hover:border-[#09C097] rounded-lg">
            <img class="h-40 border-b-4 border-[#424853] hover:border-[#09C097]  w-full" src="https://sun9-35.userapi.com/impg/DQ_z02VbPL8pVxf-LyQVgcF2cAw4xhWHbbinQA/WPxY7j-VqmA.jpg?size=736x736&quality=95&sign=d60b49ce678c103313b7e37f685ff4fe&type=album"/>
            <div class="p-2 text-white">
              <h1 class="text-xm font-bold">Изучение Go</h1>
              <p class="text-sm h-full sm:text-sm text-[#9CA1AC]">Давно выяснено, что при оценке дизайна и композиции читаемый...</p>
            </div>
          </div>
          <div class="m-2 h-full border-[#424853]  hover:border-[#09C097] rounded-lg">
            <img class="h-40 border-b-4 border-[#424853] hover:border-[#09C097] w-full" src="https://sun9-42.userapi.com/impg/S0LJupG2Owni53ZsdRZjYoz7DmsDwpzHGOWbtQ/EBFSC2qfwlc.jpg?size=1536x2048&quality=95&sign=c7a7dad1e24db69347bdc61d83c5615a&type=album"/>
            <div class="h-20 p-2 text-white">
              <h1 class="text-xm font-bold">Изучение 1С</h1>
              <p class="text-sm h-20 text-[#9CA1AC]">Давно выяснено, что при оценке дизайна и композиции читаемый...</p>
            </div>
          </div>
          <div class="m-2 border-[#424853] hover:border-[#09C097] rounded-lg">
            <img class="h-40 border-b-4 border-[#424853] hover:border-[#09C097] w-full " src="https://sun9-52.userapi.com/impg/iB4s7lIN0WrhKrZkolNxCRADu0bU6_gR5SOHMQ/urEhoJ8zJcU.jpg?size=768x1024&quality=95&sign=80509fb38de7924b63e4cb89b9b69a09&type=album"/>
            <div class="p-2 text-white">
              <p class="text-sm h-20 text-[#9CA1AC]">Давно выяснено, что при оценке дизайна и композиции читаемый...</p>
            </div>
          </div>

        </div>
      </div>
      <div class="block basis-1/2 w-50">
        <p class="bg-[#09C097] text-white rounded-br-lg text-center font-bold w-1/3 text-xl p-2">Топ-плейлисты</p>
        <div class="p-2">
          <a href="#">
            <div class="flex p-4 hover:rounded-lg ">
              <img class="border-4  border-[#09C097] w-60" src="https://sun9-52.userapi.com/impg/aD-qsKQ92aaTMmOFGulkQsX2U7VJnvZPiJ7k8g/RqZc9mmOUZI.jpg?size=1083x1080&quality=96&sign=057c9ed17e16f9e1783153d99787aa7e&type=album"/>
              <div class="ps-4 ">
                <h1 class="text-white text-2xl font-bold">Как выбрать аниме девочку</h1>
                <p class="text-[#9CA1AC]  pt-4">Выбор аниме-девочки зависит от ваших личных предпочтений и интересов. В аниме есть множество жанров, таких как фантастика, приключения, романтика, комедия и многое другое, каждый из которых может предложить уникальных персонажей.</p>
              </div>
            </div>
          </a>
        </div>
      
      </div>
    </div>
    <div class="mt-6 block">
      <p class="bg-[#09C097] text-white rounded-br-lg text-center font-bold w-1/3 text-xl p-2">Библиотека</p>
      <div class="grid gap-4 pe-4 ps-2 grid-cols-5 h-full ms-2 ">
        <div class="mt-4 w-full h-60 mb-4 relative" style="background: linear-gradient(180deg, rgba(9, 0, 0, 0.1) 25.84%, rgba(143, 143, 143, 0) 56.24%, rgba(0, 0, 0, 0.65) 90.39%), url('https://sun9-1.userapi.com/impg/ovw2Q3p_I_s-WblAMGKiIF3UDpG1R70YCslsfA/hq2fgczwxdA.jpg?size=735x817&quality=96&sign=b9ab8d5aea4803d6daf8aa8e97abd3f6&type=album'); background-position: center;background-size:100%">
          <p class="absolute bottom-2 font-bold text-white ps-2 text-xl pe-2">Разработчик на Python</p>
        </div>
        <div class="mt-4 w-full h-60 mb-4 relative" style="background: linear-gradient(180deg, rgba(9, 0, 0, 0.1) 25.84%, rgba(143, 143, 143, 0) 56.24%, rgba(0, 0, 0, 0.65) 90.39%), url('https://sun9-64.userapi.com/impg/UDqkOL3izpy-f7l2H4bTG2L0Cf1savfKdLjq_Q/iC_o7LXpjeY.jpg?size=1920x1920&quality=95&sign=33dc417f752a681256c46f898781b72f&type=album'); background-position: center;background-size:100%">
          <p class="absolute bottom-2 font-bold text-white ps-2 text-xl pe-2">Разработчик на Java</p>
        </div>
        <div class="mt-4 w-full h-60 mb-4 relative" style="background: linear-gradient(180deg, rgba(9, 0, 0, 0.1) 25.84%, rgba(143, 143, 143, 0) 56.24%, rgba(0, 0, 0, 0.65) 90.39%), url('https://sun9-78.userapi.com/impg/HnFKMV9onIA5cqTUY3o5rQEW3wuflKpqgZ4vjg/Q_-XlvM2PGE.jpg?size=1182x2048&quality=95&sign=0a1e402528357734f995f54802f2dbe3&type=album'); background-position: center;background-size:100%">
          <p class="absolute bottom-2 font-bold text-white ps-2 text-xl pe-2">Разработчик на Ruby</p>
        </div>
        <div class="mt-4 w-full h-60 mb-4 relative" style="background: linear-gradient(180deg, rgba(9, 0, 0, 0.1) 25.84%, rgba(143, 143, 143, 0) 56.24%, rgba(0, 0, 0, 0.65) 90.39%), url('https://sun9-74.userapi.com/impg/q1T_qTxmXqfCuo11p5OKBR5bNKJamtJQ-bc7aA/qanxug48BhA.jpg?size=1080x1080&quality=95&sign=a588324c6705becddbc05bf2d92928dc&type=album'); background-position: center;background-size:100%">
          <p class="absolute bottom-2 font-bold text-white ps-2 text-xl pe-2">Разработчик на Rust</p>
        </div>
        <div class="mt-4 w-full h-60 mb-4 relative" style="background: linear-gradient(180deg, rgba(9, 0, 0, 0.1) 25.84%, rgba(143, 143, 143, 0) 56.24%, rgba(0, 0, 0, 0.65) 90.39%), url('https://sun9-45.userapi.com/impg/r6zgRn6EaMfTTr4i990Vo3x2ig_7JrE6BU9rtQ/_HlKPMWHXuk.jpg?size=1620x2160&quality=95&sign=f94abfcef788a9cc9b517150bd195004&type=album'); background-position: center;background-size:100%">
          <p class="absolute bottom-2 font-bold text-white ps-2 text-xl pe-2">Разработчик на Go</p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
  .main{
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .block {
    border-radius: 4px;
    background-color: #232832;
  }

.textBlock {
    background: red;
    position: relative;
}

.textBlock:before {
    content: '';
    position: absolute;
    top: 100; 
    right: 0;
    border-bottom: 40px solid white;
    border-left: 20px solid red;
    width: 0;
}

</style>