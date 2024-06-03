<template>
  <div class="flex h-screen">
    <aside class="w-64 flex flex-col overflow-y-auto md:flex">
      <slot name="aside">
        <nav class="flex-1 px-2 py-4 bg-slate-200">
          <a
            href="#"
            class="flex items-center px-4 py-2 text-white hover:bg-gray-300 bg-slate-300"
          >
            <router-link to="/admin/products">Products</router-link>
          </a>
        </nav>
      </slot>
    </aside>

    <!-- <main class="flex-grow bg-[#c3f7bc]">
      <slot>
        <router-view />
      </slot>
    </main> -->

    <main>
      <slot>
        <router-view />
      </slot>
    </main>
  </div>
</template>

<script setup>
// import Table from '../Pages/Admin/Products/Table.vue';
// component:{
//   Table
// }
</script>
