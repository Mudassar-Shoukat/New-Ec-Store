<template>
  <!-- Button click push page in Form component -->
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

  <!-- Table outer div -->
  <div
    class="overflow-x-auto sm:rounded-lg border m-8"
    v-if="products.length > 0"
  >
    <table class="w-full text-sm text-center text-gray-500 border bg-[#F1F5F9]">
      <!-- Table Header -->
      <thead class="text-xs text-gray-700 uppercase underline">
        <tr class="bg-[#e9ecf0]">
          <th class="px-6 py-3">Title</th>
          <th class="px-6 py-3">Price</th>
          <th class="px-6 py-3">Stock</th>
          <th class="px-6 py-3">Brand</th>
          <th class="px-6 py-3">Rating</th>
          <th class="px-6 py-3">Category</th>
          <th class="px-6 py-3">Discount</th>
          <th class="px-6 py-3">Discription</th>
          <th class="px-6 py-3">Edit</th>
          <th class="px-6 py-3">Delete</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="px-4 py-2 border border-gray-300">
            {{ product.title }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.price }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.stock }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.brand }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.rating }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.category }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.discountPercentage }}
          </td>
          <td class="px-4 py-2 border border-gray-300">
            {{ product.description }}
          </td>
          <!-- Edit Button -->
          <td class="border border-gray-300">
            <button @click="editProduct(product.id)"

              class="bg-slate-200 px-[25px] py-[4px] rounded-[8px] text-[blue] border border-[#ccd1d8] hover:underline hover:bg-gray-100"
            >
              Edit
            </button>
          </td>
          <!-- Delete Button -->
          <td class="border border-gray-300">
            <button
            @click="deleteProduct(product.id)"
              class="bg-slate-200 px-[20px] py-[4px] rounded-[8px] text-[red] border border-[#ccd1d8] hover:underline hover:bg-gray-100"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p class="text-center text-[red]">No products found...</p>
  </div>

  <!-- Popup show clik delete button -->

  <div
    v-if="showConfirmationPopup"
    class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white px-8 py-5 rounded-lg">
      <h3 class="text-lg font-medium text-center mb-3">
        Are you sure you want to delete this product?
      </h3>

      <div class="flex justify-between mt-4">
        <button
          @click="showConfirmationPopup = false"
          class="px-4 py-2 bg-gray-300 rounded-md hover:bg-[#cbcccd]"
        >
          Cancel
        </button>
        <button
        @click="confirmDelete"
          class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:underline"
        >
          Confirm Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase/FB-Database";

const products = ref([]);
const showConfirmationPopup = ref(false);
let productIdToDelete = null;

async function fetchProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "Products"));
    products.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}



const editProduct = (id) => {
  console.log("edit product with id", id);
  // code to edit product with given id
};

const deleteProduct = (id) => {
  console.log("delete product with id", id);
  productIdToDelete = id;
  showConfirmationPopup.value = true;
};

const confirmDelete = async () => {
  console.log("confirm delete");
  try {
    await deleteDoc(doc(db, "Products", productIdToDelete));
    console.log("Product deleted successfully");
    showConfirmationPopup.value = false;
    fetchProducts();
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

onMounted(fetchProducts);
</script>