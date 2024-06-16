<template>
  <!-- Button click push page in Form component -->
  <div class="flex mb-2 mx-5">
    <div class="flex-grow">
      <h1 class="mt-2 mb-2 ml-4 text-[20px] font-medium">Products</h1>
    </div>
    <div class="text-right">
      <span
        class="mt-2 mb-2 flex items-center justify-center p-2 w-[120px] hover:cursor-pointer hover:bg-[#325d5dd4] bg-[#416060] rounded-[5px] border border-[#56565b] text-sm text-white"
      >
        <router-link to="/admindashboard/form">+ Add Product</router-link>
      </span>
    </div>
  </div>

  <!-- ---Table outer div--- -->
  <div
    class="overflow-x-auto border mx-4 rounded-lg"
    v-if="products.length > 0"
  >
    <table class="w-full text-sm text-center text-gray-500 border bg-[#F1F5F9]">
      <!-- ---Table Header--- -->
      <thead class="text-xs text-gray-700 uppercase underline">
        <tr class="bg-[#e8e9eb]">
          <th class="py-3 border border-[#e1dcdc] w-[80px]">Image</th>
          <th class="border border-[#e1dcdc] w-[150px] overflow-hidden">
            Title
          </th>
          <th class="border border-[#e1dcdc] w-[90px]">Price</th>
          <th class="border border-[#e1dcdc] w-[90px]">Stock</th>
          <th class="border border-[#e1dcdc] w-[120px]">Brand</th>
          <th class="border border-[#e1dcdc] w-[90px]">Rating</th>
          <th class="border border-[#e1dcdc] w-[120px]">Category</th>
          <th class="border border-[#e1dcdc] w-[90px]">Discount</th>
          <th class="border border-[#e1dcdc] w-[150px]">Select Category</th>
          <th class="border border-[#e1dcdc] w-[90px]">Edit</th>
          <th class="border border-[#e1dcdc] w-[90px]">Delete</th>
        </tr>
      </thead>
      <!-- Table Body -->
      <tbody class="text-sm bg-gray-100">
        <tr
          v-for="product in products"
          :key="product.id"
          class="hover:bg-[#ede8e84e]"
        >
          <!-- ADD Image -->

          <td
            v-if="product.id !== editingProductId"
            class="border flex items-center justify-center"
          >
            <img
              :src="product.image"
              class="object-cover h-[30px] w-[50px] rounded-[4px]"
            />
          </td>

          <!-- ---Add Products---  -->

          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 w-[auto] border border-gray-300"
          >
            {{ product.title }}
          </td>
          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.price }}
          </td>

          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.stock }}
          </td>

          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.brand }}
          </td>

          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.rating }}
          </td>
          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.category }}
          </td>

          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.discountPercentage }}%
          </td>

          <td
            v-if="product.id !== editingProductId"
            class="px-4 py-2 border border-gray-300"
          >
            {{ product.category_name }}
          </td>

          <!-- ---Update Products---  -->
          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.image"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.title"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.price"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.stock"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.brand"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.rating"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.category"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>

          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.discountPercentage"
              type="text"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />
          </td>
          <td v-if="editingProduct && product.id === editingProductId">
            <input
              v-model="product.category_name"
              type="hidden"
              class="w-full outline-[#cdd6cb] border py-1 bg-gray-100 text-center border-gray-300"
            />

            <select
              v-model="product.category_name"
              name="catagory"
              type="text"
              class="text-gray-900 rounded-[4px] block w-full py-[6px] border-b-[1px] border-[#91a091] bg-[#6062650d] outline-none text-sm hover:cursor-pointer hover:bg-slate-100"
              required
            >
              <option value="" disabled selected>Choose Category</option>
              <option
                v-for="Category in Categories"
                :key="Category.id"
                :value="Category.name"
              >
                {{ Category.name }}
              </option>
            </select>
          </td>
          <!-- ---Edit Button--- -->

          <td
            class="border border-gray-300"
            v-if="product.id !== editingProductId"
          >
            <button
              class="bg-[#ECEFEF] px-[25px] py-[4px] rounded-[8px] text-[blue] border border-[#ccd1d8] hover:underline hover:bg-gray-100"
              @click="editProduct(product.id)"
            >
              <router-link
                :to="{
                  path: '/admindashboard/products',
                  query: { product_id: product.id },
                }"
              >
                Edit
              </router-link>
            </button>
          </td>

          <!-- ---Update Button--- -->
          <td v-if="editingProduct && product.id === editingProductId">
            <button
              @click="updateProduct(product)"
              class="bg-green-500 px-[15px] py-[4px] rounded-[4px] text-[white] border border-[#ccd1d8] hover:underline hover:bg-green-600"
            >
              Update
            </button>
          </td>

          <!-- ---Delete Button--- -->
          <td class="border border-gray-300">
            <button
              @click="deleteProduct(product.id)"
              class="bg-[#eaebecb9] px-[20px] py-[4px] rounded-[8px] text-[red] border border-[#ccd1d8] hover:underline hover:bg-gray-100"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <div role="status" class="text-center">
      <svg
        aria-hidden="true"
        class="inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <!-- ---Popup show clik delete button---  -->
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
          class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 border border-[red]"
        >
          Confirm Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {collection,getDocs,deleteDoc,doc,updateDoc,} from "firebase/firestore";
import { db } from "../../Firebase/FB-Database";
import { computed } from "vue";

const products = ref([]);
const showConfirmationPopup = ref(false);
let productIdToDelete = null;
const editingProduct = ref(false);
const editingProductId = ref("");

// onMounted hook or default value show
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

// Edit produt function

const editProduct = (id) => {
  editingProduct.value = true;
  editingProductId.value = id;
};
// Uupdate Product
const updateProduct = async (product) => {
  try {
    await updateDoc(doc(db, "Products", product.id), product);
    editingProduct.value = false;
    editingProductId.value = null;
    console.log("Product updated successfully");
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

// Delete show Popup
const deleteProduct = (id) => {
  console.log("delete product with id", id);
  productIdToDelete = id;
  showConfirmationPopup.value = true;
};
// click confirmDelete button data delete in firebase store
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

const Categories = ref([]);
async function fetchCategoryid() {
  try {
    const querySnapshot = await getDocs(collection(db, "Categories"));
    Categories.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching Categories:", error);
  }
}

onMounted(fetchCategoryid);
</script>
