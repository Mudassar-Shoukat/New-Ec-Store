<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div v-if="product.value">
    <div class="container">
  
     

      <!-- Single Product image -->
      <section
        class="w-[300px] h-[440px] m-[10px] flex flex-wrap text-center rounded-[5px] border-[1px] [transition:0.3s_ease-in-out] overflow-hidden bg-gray-100 border-gray-300 hover:cursor-pointer  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      >
        <img
        :src="product.value.images" :alt="product.value.title"
          class="h-[350px] w-[282px] m-[10px] flex border bg-gray-50 border-gray-300"
        />
        <div class="h-18 w-[100%]">
          <h1 class="text-lg text-[#e34f32] font-medium  border border-[#d8cbcb] mx-2 rounded-2xl bg-gray-100">
            {{ product.value.title }}
          </h1>
        </div>
      </section>

      <!-- Product Discription or product detail -->
      <section
        class="w-[400px] h-full m-[10px] flex flex-wrap text-center rounded-[5px] overflow-hidden bg-[#f6f4f4]"
      >
        <h1
          class="text-lg text-[#b15331] font-medium h-[35px] w-full p-1 flex bg-[white]"
        >
          {{ product.value.brand }} Brand
        </h1>
        <div class="h-[35px] w-full p-1 flex bg-[white]">
          <p class="text-[#2b1710] w-[140px]">
            Discount: {{ product.value.discountPercentage }}%
          </p>
          <h1 class="text-[#3b2d8d] w-[200px] text-lg font-medium text-left">
            RS: ${{ product.value.price }}
          </h1>
        </div>

        <div class="h-[45px] w-full p-1 flex bg-[white]">
          <button
            @click="addToCart"
            type="button"
            class="text-white bg-[#7272dd] hover:bg-[#6868ca] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-[30px] py-2.5 text-center inline-flex items-center me-2"
          >
            <svg
              class="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path
                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
        <div class="h-[35px] w-full p-1 flex bg-[white]">
          <p class="text-lg underline text-[#686565]">
            Product Available: {{ product.value.stock }}
          </p>
        </div>
        <div class="h-[35px] w-full p-1 flex bg-[white]">
          <p class="text-[#97722e] w-[50px] text-2xl font-medium">
            {{ product.value.rating }}
          </p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>

        <div class="w-full p-1 flex bg-[white]">
          <p class="text-left">{{ product.value.description }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/FB-Database';
import { UseCartStore } from '../Store';
import { storeToRefs } from 'pinia';
const cartStore = UseCartStore();
const { AddtoCart } = storeToRefs(cartStore);
// const product = ref("");
// const route = useRoute();

const addToCart = () => {
  cartStore.AddtoCart({
    ...product.value,
    qty: 1,
    totalPrice: 1 * parseFloat(product.value.price),
  });
};


const product = ref("");
const route = useRoute();

async function fetchProduct() {
  const productId = route.params.id;
  if (productId) {
   
    try {
      const docRef = doc(db, 'Products', productId);
      const docSnap = await getDoc(docRef);

      if (docSnap) {
        product.value = docSnap.data();
      } else {
        console.error('Product not found:', productId);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }
}

onMounted(fetchProduct);

</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  border-radius: 10px;
  border: 2px solid rgb(239, 229, 229);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.checked {
  color: orange;
}

span {
  display: flex;
  align-items: center;
  padding: 1px;
}
</style>
