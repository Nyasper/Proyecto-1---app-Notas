import { RouteRecordRaw, createRouter,createWebHistory } from "vue-router"

const routes = [
  {
    path:'/',
    name:'tasks',
    component:()=> import('../components/taskList.vue')
  },
  {
    path:'/tasks/new',
    name:'task-new',
    component:()=> import('../components/taskForm.vue')
  },
  {
    path:'/tasks/:id',
    name:'task-detail',
    component:()=> import('../components/taskDetail.vue')
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes,
})

export default router