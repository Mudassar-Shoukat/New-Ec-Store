import { createWebHistory, createRouter } from "vue-router";
import Main from "./Pages/Main.vue";
import ProductDetail from "./Pages/SingleProductDetail.vue";
import Login from "./Pages/Login.vue";
import Table from "./Pages/Admin/Products/Table.vue";
import Form from "./Pages/Admin/Products/Form.vue";
import AdminDashboard from "./Layout/AdminDashboard.vue";



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
    path: '/admindashboard',
    component: AdminDashboard,
    children: [
      {
        name: 'admin.product.index',
        path: 'products', // Nested path 
        component: Table,
      },

      {
        name: "Form",
        path: "form",
        component: Form,
      },

    ],
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
