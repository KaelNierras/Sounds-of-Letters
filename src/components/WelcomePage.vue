<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <h1 class="mt-4">Hello, Welcome to</h1>
      <h1 class="mt-1 Subtitle">AMIKAZE LETTER SOUNDS!</h1>
      <router-link to="/home">
        <button class="btn btn-primary w-80">Get Started</button>
      </router-link>
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