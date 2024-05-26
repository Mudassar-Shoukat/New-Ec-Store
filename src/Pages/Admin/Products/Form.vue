<template>
  <div>
    <form
      @submit.prevent="handleSubmit"
      class="max-w-md mx-auto bg-[#b3b8bf1f] px-6 pt-10 pb-8 border-[1px] border-[#d5d4d4] rounded-md mb-[100px]"
    >
      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-[#4c4fe7e1] underline">
          Add New Product
        </h1>
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
          class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
          type="number"
          placeholder=" "
          required
          min="0"
          @input="checkPrice"
        />
        <span v-if="price_error" class="text-red-500 text-sm"
          >Please enter a positive value for price</span
        >
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
            type="number"
            class="py-[2px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-[#91a091] appearance-none focus:outline-none focus:ring-0 focus:border-[#7e7eea]"
            placeholder=" "
            required
            min="0"
            @input="checkRating"
          />
          <span v-if="Rating_error" class="text-red-500 text-sm"
            >Enter maximum of five stars.</span
          >
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
            min="0"
            @input="checkPercentage"
          />
          <span v-if="Percentage_error" class="text-red-500 text-sm"
            >Enter min 0 and max 100
          </span>
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
        name="submit"
        class="text-white bg-[#4c4fe7c7] hover:bg-[#4c4fe7e8] hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
      >
        Enter Data
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { db } from "../../../Firebase/FB-Database";
const router = useRouter();

// const isEdit = ref(false);
onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", "getdata from firebase store", doc.data());
  });
});

// check price is greater than zero
let price_error = false;
const checkPrice = () => {
  if (newProduct.value.price < 0) {
    price_error = true;
  } else {
    price_error = false;
  }
};

// check Rating is greater than 5
let Rating_error = false;
const checkRating = () => {
  if (newProduct.value.rating > 5) {
    Rating_error = true;
  } else {
    Rating_error = false;
  }
};

// check Percentage is greater than 0 and less than is 100
let Percentage_error = false;
const checkPercentage = () => {
  if (
    newProduct.value.discountPercentage > 0 ||
    newProduct.value.discountPercentage < 100
  ) {
    Percentage_error = true;
  } else {
    Percentage_error = false;
  }
};

const newProduct = ref({
  title: "",
  price: "",

  stock: "",
  brand: "",
  rating: "",
  category: "",
  discountPercentage: "",
  description: " ",
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
