import { createRouter,createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersPosts from "./views/UsersPosts.vue"
import UsersProfile from "./views/UsersProfile.vue"
import HeaderHome from "./views/HeaderHome.vue"
import HeaderUsers from "./views/HeaderUsers.vue"


const routes = [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
        header: HeaderHome
      },
    },
    {
      path: "/users/:id",
      name: "Users",
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
          { path: "posts", component: UsersPosts },
          { path: "profile", component: UsersProfile, name: "users-id-profile" },
        ]
    },
    {
      path: "/*",
      redirect: {path: "/"}
    },
  ];
  
  const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to, savedPosition){
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash){
      return  {
        selector: to.hash
      }
    } 
    return {x: 0, y:100}
  }
  });
  
  export default router;