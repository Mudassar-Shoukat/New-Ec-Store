<template>
  <div class="flex top-0 h-full">
    <aside
      class="w-60 h-[1000px] flex flex-col overflow-y-auto md:flex bg-[#F3F4F4] rounded-tr-[10px] border-[2px] border-[#e5edf8]"
    >
      <nav class="flex-1 px-2 py-4">
        <!-- Product Table -->
        <span
          class="flex items-center px-4 py-2 hover:cursor-pointer hover:bg-[#e3e4e5] bg-[#e8e5e57e] rounded-[5px] mb-2 border border-[#b0b1b1a0] hover:text-[#3b46da] text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <router-link to="/admindashboard/products">Products</router-link>
        </span>
        <!-- catagory -->
        <span
          class="flex items-center px-4 py-2 hover:cursor-pointer hover:bg-[#e3e4e5] bg-[#e8e5e57e] rounded-[5px] mb-2 border border-[#b0b1b1a0] hover:text-[#3b46da] text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>

          <router-link to="/admindashboard/catagory">Categorys</router-link>
        </span>
      </nav>
    </aside>
    <!-- router-view show -->
    <main class="flex-grow bg-gray-50">
      <slot>
        <router-view />
      </slot>
    </main>
  </div>
</template>

<script></script>

<style scoped></style>
