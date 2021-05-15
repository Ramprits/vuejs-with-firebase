import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Project
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  { path: "/:catchAll(.*)", redirect: "/" }
];

const router = createRouter({
  linkExactActiveClass: "is-active has-text-primary",
  history: createWebHashHistory(window.process.env.BASE_URL),
  routes
});

export default router;
