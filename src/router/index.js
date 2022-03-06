import Vue from 'vue';
import VueRouter from 'vue-router';

import { auth } from "../utils";
import Home from "../views/Home";
import Login from "../views/Login";
import ChatRoom from "../views/ChatRoom";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/chat-room",
      name: "ChatRoom",
      component: ChatRoom
    },
    {
      path: "*",
      redirect: "/" // page not found
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  // make sure the user is authenticated
  // ❗️ Avoid an infinite redirect
  if (!auth.isAuthenticated() && to.name !== "Login") {
    // redirect the user to the login page
    next("login");
  }
  if (auth.isAuthenticated() && to.name === "Login") {
    // redirect the user to the login page
    next("Home");
  }
  next();
});

export default router;
