<template>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.spinner {
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
}
.spinner div {
  position: absolute;
  top: 50px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--color-blue-light);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.spinner div:nth-child(1) {
  left: 8px;
  animation: spinner1 0.6s infinite;
}
.spinner div:nth-child(2) {
  left: 8px;
  animation: spinner2 0.6s infinite;
}
.spinner div:nth-child(3) {
  left: 32px;
  animation: spinner2 0.6s infinite;
}
.spinner div:nth-child(4) {
  left: 56px;
  animation: spinner3 0.6s infinite;
}
@keyframes spinner1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes spinner3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes spinner2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
