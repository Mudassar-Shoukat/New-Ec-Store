import { createWebHistory, createRouter } from "vue-router";
import Main from "./Pages/Products/Main.vue";
import ProductDetail from "./Pages/Products/SingleProductDetail.vue";
import Login from "./Pages/Products/Login.vue";
import Table from "./Pages/Admin/Table.vue";
import Form from "./Pages/Admin/Form.vue";
import AdminDashboard from "./Layout/AdminDashboard.vue";
import Catagory from "./Pages/Admin/Catagory.vue";
import CatagoryForm from "./Pages/Admin/CatagoryForm.vue";

const routes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },

  {
    name: "ProductDetail",
    path: "/product/:id",
    component: ProductDetail,
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
  },

  // Admindashboard dasboard Layout
  {
    path: "/admindashboard",
    component: AdminDashboard,
    children: [
      // Products Table
      {
        name: "admin.product.index",
        path: "products", // Nested path
        component: Table,
      },
      // Product Form
      {
        name: "Form",
        path: "form",
        component: Form,
      },
      {
        name: "Catagory",
        path: "catagory",
        component: Catagory,
      },
      // catagory form
      {
        name: "CatagoryForm",
        path: "CatagoryForm",
        component: CatagoryForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
