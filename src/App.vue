<script setup>
import navbar from './components/navbar.vue';

</script>


<template>
<navbar></navbar>
<Suspense>
<RouterView />
</Suspense>
</template>

<style>
*{
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  color:white;
}

body{
  background-color: rgb(46, 46, 46);
}
</style>
