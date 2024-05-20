 <template>
  <div class="flex justify-center">
    <button
      type="button"
     
      class="w-[300px] h-[35px] mt-2 mb-2 text-sm font-medium bg-[#99969f34] rounded-[5px] border border-[#d0cdcd] hover:bg-gray-100 text-[#4531db] hover:underline hover:[transition:0.3s_ease-in-out]"
    >
      <router-link :to="{ path: '/admin/products/create' }"
        >Create New Product
      </router-link>
    </button>
  </div>

<div>{{ newProduct }}</div>
</template>




<script setup>
import { defineProps } from "vue";

const props = defineProps({
  newProduct: Object,
});

</script>

