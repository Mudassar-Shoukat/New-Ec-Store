<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      class="max-w-md mx-auto bg-[#b3b8bf1f] px-6 pt-10 pb-8 border-[1px] border-[#d5d4d4] rounded-md mb-[100px]"
    >
   
      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-[#4c4fe7e1] underline">Product Detail</h1>
      </div>

      <!-- Product Title -->
      <div class="w-full mb-1">
        <label
          for="title"
          class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
          >Title</label
        >
        <input
          v-model="newProduct.title"
          type="text"
          class="py-[3px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
          placeholder=" "
          required
        />
      </div>

      <!-- Product price -->
      <div class="w-full mb-1">
        <label
          for="price"
          class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
          >Price</label
        >
        <input
          v-model="newProduct.price"
          type="text"
          class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
          placeholder=" "
          required
        />
      </div>
      <!-- Product stock -->
      <div class="w-full mb-2">
        <label
          for="stock"
          class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
          >Stock</label
        >
        <input
          v-model="newProduct.stock"
          type="text"
          class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
          placeholder=" "
          required
        />
      </div>

      <!-- Product Brand -->
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="w-full mb-1">
          <label
            for="brand"
            class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
            >Brand</label
          >
          <input
            v-model="newProduct.brand"
            type="text"
            class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
            placeholder=" "
            required
          />
        </div>
        <!-- Product Rating -->
        <div class="w-full mb-1">
          <label
            for="rating"
            class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
            >Rating</label
          >
          <input
            v-model="newProduct.rating"
            type="text"
            class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
            placeholder=" "
            required
          />
        </div>
      </div>

      <!-- Product category -->
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="w-full mb-1">
          <label
            for="category"
            class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
            >Category</label
          >
          <input
            v-model="newProduct.category"
            type="text"
            class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
            placeholder=" "
            required
          />
        </div>

        <!-- Product Discount -->
        <div class="w-full mb-1">
          <label
            for="discountPercentage"
            class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
            >Discount</label
          >
          <input
            v-model="newProduct.discountPercentage"
            type="text"
            class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
            placeholder=" "
            required
          />
        </div>
      </div>

      <!-- Product Description -->

      <div class="w-full mb-5">
        <label
          for="description"
          class="text-[#333030] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-[15px]"
          >Description</label
        >
        <textarea
          v-model="newProduct.description"
          type="text"
          class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
          placeholder=" "
          required
        />
      </div>

      <button
        type="submit"
        class="text-white bg-[#4c4fe7c7] hover:bg-[#4c4fe7e8] hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        Enter Data
      </button>
    </form>
  </div>
  <!-- <ProductCreate :new-product="newProduct.value" /> -->
<!-- <div v-for="new_prod in newProduct" :key="new_prod">
  {{ new_prod.price  }}
</div> -->

</template>

<script setup>

// import ProductCreate from "./Product-create.vue";
import { ref, onMounted, } from "vue";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { db } from "../../../Firebase/FB-Database";
const router = useRouter();
// import ProductCreate from './Product-create.vue';


  //  components: { ProductCreate }

// Get Data in Firebase store
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", "getdata from firebase store", doc.data());
  });
});

// Add Data in Firebase store
const newProduct = ref({
  title: "aaaaa",
  price: "aa",
  stock: "aaaaaa",
  brand: "eee",
  rating: "eee",
  category: "rr",
  discountPercentage: "gg",
  description: "hhhh",
});

const handleSubmit = async () => {
  try {
    const productCollection = collection(db, "Products");
    const newProductDoc = await addDoc(productCollection, newProduct.value);

    if (newProductDoc.id) {
      console.log("New add product Id", newProductDoc.id);
      router.push({ path: "/admin/products" });
    }
    // Clear the form after successful submission
    newProduct.value = {
      title: "",
      price: "",
      stock: "",
      brand: "",
      rating: "",
      category: "",
      discountPercentage: "",
      description: "",
    };
  } catch (error) {
    console.error("Error adding document:", error);
  }
};








</script>
