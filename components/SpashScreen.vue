<template>
  <div class="logo-container">
    <img
      src="~/assets/images/logo.jpg"
      alt="Seafood Express Logo"
      class="logo"
    />
  </div>
</template>

<script setup></script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
  overflow: hidden; /* Prevent scroll issues */
}

.logo {
  width: 650px; /* Adjust size as needed */
  animation: brick-animation 3s ease forwards;
  transform-origin: center center; /* Ensure the image grows from the center */
}

@keyframes brick-animation {
  0% {
    /* Starting with the image split into multiple pieces */
    clip-path: polygon(
      0 0,
      50% 0,
      50% 50%,
      0 50%
    ); /* Only the top-left piece is visible */
  }
  20% {
    clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%); /* Right half */
  }
  40% {
    clip-path: polygon(
      0 50%,
      50% 50%,
      50% 100%,
      0 100%
    ); /* Bottom-left piece */
  }
  60% {
    clip-path: polygon(
      50% 50%,
      100% 50%,
      100% 100%,
      50% 100%
    ); /* Bottom-right piece */
  }
  80% {
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 100%
    ); /* Full image, but still broken into segments */
  }
  100% {
    clip-path: none; /* Complete the image */
  }
}
</style>
