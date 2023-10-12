<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main">
    <div class="header">
      <h1>AMIKAZE LETTER SOUNDS</h1>
      <p>By: Jeramie M. De Los Santos.</p>
    </div>
    <div class="router">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 130px;
  text-align: center;
  padding: 5px;
  background-color: #87CEEB; /* Sky blue background */
  color: white; /* Tomato red text color */
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Playful font */
  min-width: 1000px;
}

.header h1 {
  font-size: 3em;
  margin-bottom: 5px;
}

.header p {
  font-size: 1.2em;
}

.router {
  border: 5px solid black;
  border-radius: 20px;
  background: white;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding-top: 100px;
  min-width: 1000px;
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
