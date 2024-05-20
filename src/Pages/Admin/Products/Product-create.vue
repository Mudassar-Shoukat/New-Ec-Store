<template>
  <div class="flex justify-center mb-7">
    <button
      type="button"
      class="w-[300px] h-[35px] mt-2 mb-2 text-sm font-medium bg-[#99969f34] rounded-[5px] border border-[#d0cdcd] hover:bg-gray-100 text-[#4531db] hover:underline hover:[transition:0.3s_ease-in-out]"
    >
      <router-link :to="{ path: '/admin/products/create' }"
        >Create New Product</router-link
      >
    </button>
  </div>

  <div v-if="products.length > 0">
    <table class=" border border-collapse shadow-sm w-auto m-[30px]">
      <tr>
        <th
          class="px-4 py-2 text-center text-sm  bg-[#f4f1f1] border border-[#e3dddd] text-[#524f4f] underline"
        >
          Title
        </th>
        <th
          class="px-4 py-2 text-center text-sm  bg-[#f4f1f1] border border-[#e3dddd] text-[#524f4f] underline"
        >
          Price
        </th>
        <th
          class="px-4 py-2 text-center text-sm  bg-[#f4f1f1] border border-[#e3dddd] text-[#524f4f] underline"
        >
          Stock
        </th>
      </tr>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="px-4 py-2 border border-gray-200">{{ product.title }}</td>
          <td class="px-4 py-2 border border-gray-200">{{ product.price }}</td>
          <td class="px-4 py-2 border border-gray-200">{{ product.stock }}</td>
    

        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p class="text-center text-gray-500">No products found...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/FB-Database";

const products = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  products.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log("new array", products.value);
});
</script>
