<template>
  <div class="flex">
    <aside class="w-64 flex flex-col overflow-y-auto md:flex">
      <slot name="aside">
        <nav class="flex-1 px-2 py-4 border border-red-100 bg-[#EEF2F6] ">
          <span
         
            class="flex items-center px-4 py-2 text-white hover:bg-gray-300 bg-slate-300 mb-2"
          >
            <router-link to="/admindashboard/products">Products</router-link>
          

          </span>
          <span
         
            class="flex items-center px-4 py-2 text-white hover:bg-gray-300 bg-slate-300"
          >
            <router-link >Catagory</router-link>
          

          </span>
        </nav>
      </slot>
    </aside>

    <main class="flex-grow">
      <slot>
        <router-view />
      </slot>
    </main>
  </div>
</template>

<script>
</script>

<style scoped>

</style>
