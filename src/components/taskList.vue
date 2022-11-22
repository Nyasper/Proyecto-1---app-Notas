<script setup>
import { viewAllTaks } from '../services/taskService';
import taskComponent from './task.vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const tasks = await viewAllTaks()



</script>


<template>
  <h1 class="title" >All Notes</h1>
  <ul id="taskContainer">
      <taskComponent v-for="task in tasks" :title='task.title' :description='task.description' :key="task._id" @click="router.push(`/tasks/${task._id}`)"/>
  </ul>

</template>
<style>

.title{
  text-align: center;
  margin: 30px;
}


#taskContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>