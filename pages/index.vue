<template>
  <div class="p-4 flex ">
    <div class=" flex items-center absolute my-[300px] mx-[80px] cursor-pointer">
          <h1 class="text-3xl p-2  text-center font-bold   w-[250px] h-[70px] border-2 border-gray-600 hover:bg-slate-50">Shope Now</h1>
          <div class=" mx-[-30px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
         </svg>
          </div>
          
    </div>
    <div class=" my-[50px] md:">
       <img class=" w-screen h-[700px] " src="https://www.shannonspringshotel.com/wp-content/uploads/2020/06/shopping-shannon-springs-2.jpg" alt="">
   

    </div>
  

  </div>

 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router'; // Ensure this import is correct based on your project setup

const route = useRoute();


</script>

<style scoped>
/* Add any additional styles if needed */
</style>
