<template>
  <div class="header">
      <h1 class="Title">AMIKAZE LETTER SOUNDS</h1>
      <p class="Subtitle">By: Jeramie M. De Los Santos.</p>
  </div>
    <div class="grid">
      <div v-for="letter in letters" :key="letter.id" class="grid-item">
        <img 
          :src="`/images/letters/${letter.name}.png`" 
          :width="150" 
          :height="auto" 
          alt="Letter" 
          @click="playAnimationAndSound(letter.name)"
        /> 
      </div>
    </div>
    <div class="image" :class="{ 'wiggle': isWiggling }">
      <img src="/images/Amik.png" 
      :width="170" 
      :height="auto" 
      alt="Amik Avatar">
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

const isWiggling = ref(false);

function playAnimationAndSound(letterName) {
  // Play animation
  const element = document.querySelector(`img[src*="${letterName}.png"]`);
  element.classList.remove('animate'); // Remove existing 'animate' class
  void element.offsetWidth; // Trigger reflow to restart the animation
  element.classList.add('animate'); // Add 'animate' class for animation

  // Play sound
  const audio = new Audio(`/sounds/${letterName}.mp3`);
  audio.play();

  // Start wiggling
  isWiggling.value = true;
  
  setTimeout(() => {
    isWiggling.value = false;
  }, 500); // Adjust the time based on your preference

}

// Remove animation class after animation ends
document.addEventListener('animationend', (event) => {
  const element = event.target;
  if (element && element.classList.contains('animate')) {
    element.classList.remove('animate');
  }
});
</script>

<style scoped>

.main {
  position: relative;
}

.image {
  position: absolute;
  top:.5in;
  right: 2in;
}


.Title, .Subtitle {
  padding: 5px;
  background-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient colors */
  border-radius: 10px;
}
.header {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 130px;
  text-align: center;
  padding: 5px;
  color: white; /* Tomato red text color */
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; /* Playful font */
  min-width: 1000px;
}

.header h1 {
  font-size: 3em;
  margin-bottom: 5px;
}

.header p {
  font-size: 1.2em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr); /* Default to 9 columns */
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border: 5px solid black;
  border-radius: 20px;
  background: white;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(6, 1fr); /* 6 columns for screens up to 1200px wide */
    grid-gap: 3px;
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns for screens up to 900px wide */
    grid-gap: 3px;
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for screens up to 600px wide */
    grid-gap: 1px;
  }
}

@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr; /* 1 column for screens up to 400px wide */
    grid-gap: 1px;
  }
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

.image.wiggle {
    animation: wiggle 0.5s;
    
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
    
  }
</style>
