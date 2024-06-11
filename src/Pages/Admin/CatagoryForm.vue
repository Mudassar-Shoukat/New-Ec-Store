<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      class="max-w-md mx-auto bg-[#b3b8bf1f] px-6 pt-10 pb-8 border-[1px] border-[#d5d4d4] rounded-md mb-[100px] mt-8"
    >
      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-[#235b65e1] underline">
          Add New Category
        </h1>
      </div>

      <!-- Product Title -->

      <div class="w-full mb-1">
        <label
          for="title"
          class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
          >Category Name</label
        >
        <input
          v-model="newCategory.name"
          type="text"
          class="py-[3px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#168c96]"
          placeholder=" "
          required
        />
      </div>

      <button
        type="submit"
        name="submit"
        class="text-white bg-[#235b65e1] hover:bg-[#4a919de8] hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center mt-10 "
      >
        Enter Data
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";

import { useRouter } from "vue-router";
import { db } from "../../Firebase/FB-Database";

const router = useRouter();

const newCategory = ref({
  name: "",
});

const handleSubmit = async () => {
  try {
    const productCollection = collection(db, "Categorys");
    const newCategoryDoc = await addDoc(productCollection, newCategory.value);

    if (newCategoryDoc.id) {
      console.log("New add product Id", newCategoryDoc.id);
      router.push({ path: "/admindashboard/Catagory" });
    }

    newCategory.value = {
      name: "",
    };
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
</script>
