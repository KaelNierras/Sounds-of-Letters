<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">
    <h1 class="mt-4">Hello, Welcome to</h1>
    <h1 class="mt-1 Subtitle">AMIKAZE LETTER SOUNDS!</h1>
    <button 
      class="btn btn-primary w-80" 
      @click="startLoadingAndPlaySound(Welcome)"
      :disabled="loading"
    >
      <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span v-else>Get Started</span>
    </button>
  </div>
</template>

<style>
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

function playSound(letterName) {
  const audio = new Audio(`/sounds/${letterName}.mp3`);
  audio.play(); 
}

function startLoadingAndPlaySound(letterName) {
  loading.value = true;
  playSound(letterName);
  setTimeout(() => {
    loading.value = false;
    // Redirect to another page using router
    router.push('/home');
  }, 3000);
}
</script>
