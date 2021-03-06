import { createRouter, createWebHistory } from "vue-router"
import Search from "./screens/Search.vue"
import Profile from "./screens/Profile.vue"
import SkillDetail from "./screens/SkillDetail.vue"
import Login from "././screens/Login.vue"

const routes = [
  {
    path: "/",
    component: Login,
    name: "Login",
  },
  {
    path: "/search",
    component: Search,
    name: "Search",
  },
  {
    path: "/profile/:username",
    component: Profile,
    name: "Profile",
  },
  {
    path: "/skill/:username/:id",
    component: SkillDetail,
    name: "SkillDetail",
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
