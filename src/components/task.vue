<script setup>

const props = defineProps(['title','description'])

</script>

<template>
  <li class="task">
  <h2>{{title}}</h2>
  <p>{{description}}</p>
</li>
</template>

<style>

.task{
  background-color: rgb(27, 27, 27);
  padding: 10px;
  margin: 20px;
  width: 260px;
  height: 300px ;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
}
.task > h2{
  height: 20%;
}

.task > p {
  height: 80%;
}
</style>