<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <h1 class="mt-4">Hello, Welcome to</h1>
    <h1 class="mt-1 Subtitle">AMIKAZE LETTER SOUNDS!</h1>
    <button 
      class="btn btn-warning w-80 " 
      @click="startLoadingAndPlaySound()"
      :disabled="loading"
    >
      <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span v-else class="text">Get Started</span>
    </button>
  </div>
</template>

<style>

.text{
  font-weight:600;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Playful font */
}
.Title, .Subtitle {
  padding: 5px;
  color: white;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Playful font */
  background-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient colors */
  border-radius: 10px;
}
</style>

<script setup>
import { ref } from 'vue';
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
