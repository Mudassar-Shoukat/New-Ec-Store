<template>
  <div>
    <form
      class="max-w-md mx-auto bg-[#b3b8bf1f] px-6 pt-10 pb-8 border-[1px] border-[#e4e2e2] rounded-md mb-[100px]"
    >
      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-[#4c4fe7e1]">Product Detail</h1>
      </div>

      <!-- Product Title -->
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
          placeholder=" "
          required
        />
        <label
          for="title"
          class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
          >Title</label
        >
      </div>

      <!-- Product price -->
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
          placeholder=" "
          required
        />
        <label
          for="price"
          class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
          >Price</label
        >
      </div>
      <!-- Product stock -->
      <div class="relative z-0 w-full mb-5">
        <input
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
          placeholder=" "
          required
        />
        <label
          for="stock"
          class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
          >Stock</label
        >
      </div>

      <!-- Product Brand -->
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
            placeholder=" "
            required
          />
          <label
            for="brand"
            class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
            >Brand</label
          >
        </div>
        <!-- Product Rating -->
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
            placeholder=" "
            required
          />
          <label
            for="rating"
            class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
            >Rating</label
          >
        </div>
      </div>

      <!-- Product category -->
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
            placeholder=" "
            required
          />
          <label
            for="category"
            class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
            >Category</label
          >
        </div>

        <!-- Product Discount -->
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
            placeholder=" "
            required
          />
          <label
            for="discountPercentage"
            class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
            >Discount</label
          >
        </div>
      </div>

      <!-- Product Description -->

      <div class="relative z-0 w-full mb-5">
        <textarea
          type="text"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea] peer"
          placeholder=" "
          required
        />
        <label
          for="description"
          class="absolute text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 text-[20px]"
          >Description</label
        >
      </div>

      <button
        type="submit"
        class="text-white bg-[#4c4fe7e1] hover:bg-[#4c4fe7cd] hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        Enter Data
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";

import { db } from "../../../firebase";

const Products = ref([]);

onMounted(() => {
//     const querySnapshot = await getDocs(collection(db, 'Products'));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());

// });

  onSnapshot(collection(db, "Products"), (querySnapshot) => {
    const ProductArray = [];
    querySnapshot.forEach((doc) => {
      const ProductVal = {
        title: doc.data().title,
        price: doc.data().price,
        stock: doc.data().stock,
        brand: doc.data().brand,
        rating: doc.data().rating,
        category: doc.data().category,
        discountPercentage: doc.data().discountPercentage,
        description: doc.data().description,
      };
      ProductArray.push(ProductVal);
    });

    Products.value = ProductArray;
    console.log(Products.value);
  });
});



// add data
// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);


</script>

<style scoped></style>
