import {
  createRouter,
  createWebHistory,
} 
from "vue-router"; /*import de vue router pour gèrer les route*/
import TheHome from "../views/TheHome.vue"; /*import de mes views pour les affecté au route*/
import TheSignup from "../views/TheSignup.vue";
import TheLogin from "../views/TheLogin.vue";
import TheCreatePublication from "../views/TheCreatePublication.vue";
import EspacePerso from "../views/EspacePerso.vue";
import ModifierUser from "../views/ModifierUser.vue";
import DeleteUser from "../views/DeleteUser.vue";
const routes = [
  /*tableau de route*/
  {
    path: "/",
    name: "TheHome",
    component: TheHome,
  },
  {
    path: "/signup",
    name: "TheSignup",
    component: TheSignup,
  },
  {
    path: "/login",
    name: "TheLogin",
    component: TheLogin,
  },
  {
    path: "/posts",
    name: "TheCreatePublication",
    component: TheCreatePublication,
  },
  {
    path: "/selfSpace",
    name: "EspacePerso",
    component: EspacePerso,
  },
  {
    path: "/ModifyUser",
    name: "  ModifierUser",
    component: ModifierUser,
  },
  {
    path: "/DeleteUser",
    name: "DeleteUser",
    component: DeleteUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
