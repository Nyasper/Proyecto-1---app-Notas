<script setup >

import aboutcss from './about.css'

</script>

<template>
  <div id="hareIMGContainer">
    <img src="/Hare_Portrait.webp" alt="hare-portrait">
    <div id="about-container">
    <h2>Acerca de Este Proyecto</h2>
    <p>Este es mi primer proyecto utilizando VUE js para el front end y Express para el backend.</p>
  </div>
  </div>
</template>


<style>

#hareIMGContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(27, 27, 27);
  border-radius: 20px;
  margin: auto;
  margin-top: 60px;
  padding: 10px;
  width: max-content;
}

#about-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

#hareIMGContainer img {
  height: 560px;
  background-color:  rgb(46, 46, 46);
  padding: 20px;
  border-radius: 10px;
}


#hareIMGContainer  h2{
  font-size: 2.8em;
  margin: 30px 10px;
}

#hareIMGContainer  p {
  margin: 30px 10px;
  font-size: 1.2em;
}

</style>