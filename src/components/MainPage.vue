<template>
  <div class="grid">
    <div v-for="letter in letters" :key="letter.id" class="grid-item">
      <img 
        :src="`./public/images/letters/${letter.name}.png`" 
        :width="170" 
        :height="auto" 
        alt="Letter" 
        @click="playAnimationAndSound(letter.name)"
      /> 
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const letters = ref([
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' },
  { id: 5, name: 'E' },
  { id: 6, name: 'F' },
  { id: 7, name: 'G' },
  { id: 8, name: 'H' },
  { id: 9, name: 'I' },
  { id: 10, name: 'J' },
  { id: 11, name: 'K' },
  { id: 12, name: 'L' },
  { id: 13, name: 'M' },
  { id: 14, name: 'N' },
  { id: 15, name: 'O' },
  { id: 16, name: 'P' },
  { id: 17, name: 'Q' },
  { id: 18, name: 'R' },
  { id: 19, name: 'S' },
  { id: 20, name: 'T' },
  { id: 21, name: 'U' },
  { id: 22, name: 'V' },
  { id: 23, name: 'W' },
  { id: 24, name: 'X' },
  { id: 25, name: 'Y' },
  { id: 26, name: 'Z' },
]);

function playAnimationAndSound(letterName) {
  // Play animation
  const element = document.querySelector(`img[src*="${letterName}.png"]`);
  element.classList.remove('animate'); // Remove existing 'animate' class
  void element.offsetWidth; // Trigger reflow to restart the animation
  element.classList.add('animate'); // Add 'animate' class for animation

  // Play sound
  const audio = new Audio(`./public/sounds/${letterName}.mp3`);
  audio.play();
}

// Remove animation class after animation ends
document.addEventListener('animationend', (event) => {
  const element = event.target;
  if (element && element.classList.contains('animate')) {
    element.classList.remove('animate');
  }
});
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 5px; /* Define the gap between grid items */
  justify-content: center; /* Horizontally center the items */
  align-items: center; /* Vertically center the items */
}

.grid-item {
  /* border: 1px solid black; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Add animation styles */
.animate {
  animation: bounce 0.5s; /* Example animation, replace with your own */
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate {
  animation: pulse 0.5s; /* Use pulse animation */
}
</style>
