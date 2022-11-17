import { createApp } from 'vue'

// import './style.css'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')



async function getUser() {
  try {
    const response = await axios.get('http://localhost:3000/api')
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser()