<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { onMounted, ref} from 'vue'

import 'bootstrap/dist/css/bootstrap.css';

const audio = new Audio(`/sounds/Background.mp3`);
const audioIsPlaying = ref(false);

function playBackground(){
  audio.play(); 
  audioIsPlaying.value = true;
}

onMounted(() => {
  document.addEventListener('click', () => {
    if (!audioIsPlaying.value) {
      playBackground();
    }
  });
});
</script>


<template>
  <div class="main">
    <div class="router">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 320px) {
  .header h1, .header p {
    font-size: 0.8em;
  }
}

@media (min-width: 600px) {
  body {
    resize: both;
    overflow: auto;
  }
}
</style>
