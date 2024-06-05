<template>
  <div class="mx-4">
    <div>
      <div
        class="flex items-center bg-[#c1c2c31d] px-4 border border-[#e0d8d8] h-[40px] rounded-sm"
      >
        <!-- Car catagory button -->
        <div
          class="w-[120px] h-[34px] flex items-center justify-center border border-gray-300 rounded-sm hover:bg-slate-100 hover:text-blue-500 text-sm"
          @click="Car_list"
        >
          <button class="my-2 py-2 font-medium">New Cars</button>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-6 flex items-center hover:cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <!-- Car catagory button -->
        <div
          class="w-[80px] h-[34px] flex items-center justify-center border border-gray-300 rounded-sm hover:bg-slate-100 hover:text-blue-500 text-sm ml-2"
        >
          <button class="my-2 py-2 font-medium">Bike</button>
          <span> </span>
        </div>
      </div>
      <!-- Bike catagory open list -->
      <div
        v-if="Show_carlist"
        class="z-50 flex flex-row bg-[white] py-1 px-4 text-gray-800 shadow-xl"
      >
        <a
          class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black mx-2 hover:cursor-pointer hover:underline"
        >
          Honda
        </a>

        <a
          class="my-2 block border-b border-gray-100 py-1 hover:cursor-pointer hover:underline font-semibold text-gray-500 hover:text-black mx-2"
        >
          Suzuki
        </a>

        <a
          class="my-2 block hover:cursor-pointer hover:underline border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black mx-2"
        >
          Toyota
        </a>

        <a
          class="my-2 block hover:cursor-pointer hover:underline border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black mx-2"
        >
          Mehran
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Show_carlist = ref(false);

const Car_list = () => {
  Show_carlist.value = !Show_carlist.value;
};
</script>
