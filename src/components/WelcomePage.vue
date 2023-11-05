<template>
  <div class="main">
    <div class="image">
      <img src="/images/Amik.gif" 
      :width="180" 
      :height="auto" 
      alt="Amik Avatar">
    </div>
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <h1 class="mt-2">Hi, Welcome to</h1>
      <h1 class="mt-1 Subtitle">AMIKAZEE LETTER SOUNDS!</h1>
      <button 
        class="btn btn-warning w-80 " 
        @click="startLoadingAndPlaySound()"
        :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span v-else class="text">Get Started</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
image{
  position: relative;
}
.text{
  font-weight:600;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; /* Playful font */
}
.Title, .Subtitle {
  padding: 5px;
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; /* Playful font */
  background-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient colors */
  border-radius: 10px;
}
</style>

<script setup>
import { ref,onMounted } from 'vue';
import router from '../router';
const loading = ref(false);

function playSound(){
  const audio = new Audio(`/sounds/Welcome.mp3`);
  audio.play(); 
}

function startLoadingAndPlaySound() {
  loading.value = true;
  playSound();
  setTimeout(() => {
    loading.value = false;
    // Redirect to another page using router
    router.push('/home');
  }, 5000);
}

</script>
