<script lang="ts" setup>
import { computed } from 'vue'

const errorCode = computed(() => '404')
const errorMessage = computed(() => 'Oops! Page Not Found')
const subMessage = computed(() => "The page you're looking for seems to have wandered off.")

const illustrations = [
  'Our pixels got lost...',
  'Looks like we took a wrong turn!',
  'This page is on a coffee break.',
  'Houston, we have a navigation problem.',
]

const randomIllustration = computed(
  () => illustrations[Math.floor(Math.random() * illustrations.length)],
)
</script>

<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-white overflow-hidden px-4 py-16"
  >
    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div
        class="absolute animate-blob top-10 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
      <div
        class="absolute animate-blob animation-delay-2000 bottom-10 left-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl"
      ></div>
    </div>

    <div
      class="relative z-10 max-w-2xl text-center transform transition-all duration-500 hover:scale-105"
    >
      <h1
        class="text-9xl md:text-[220px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 animate-pulse-slow"
      >
        {{ errorCode }}
      </h1>

      <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
        {{ errorMessage }}
      </h2>

      <p class="text-lg md:text-xl text-gray-600 mb-6 max-w-md mx-auto">
        {{ subMessage }}
      </p>

      <p class="text-sm text-gray-500 italic mb-8 animate-bounce-slow">
        {{ randomIllustration }}
      </p>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
