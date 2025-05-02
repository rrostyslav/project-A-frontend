<script lang="ts" setup>
import { SpriteIcon } from '@/shared/ui/icon'
import { Typography } from '@/shared/ui/typography'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen px-4 space-y-6 overflow-hidden"
  >
    <transition
      appear
      enter-active-class="transition-opacity transition-transform duration-500 ease-out delay-200"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
    >
      <SpriteIcon class="w-20 h-20 text-white" name="project-a" />
    </transition>

    <transition
      appear
      enter-active-class="transition-opacity transition-transform duration-500 ease-out delay-400"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
    >
      <Typography as="h1" class="text-white" typography="title1" weight="medium">
        Welcome to Project A
      </Typography>
    </transition>

    <transition
      appear
      enter-active-class="transition-opacity transition-transform duration-500 ease-out delay-600"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
    >
      <Typography as="p" class="max-w-lg text-center text-white/80" typography="large">
        Your all-in-one platform to streamline workflows and boost productivity.
      </Typography>
    </transition>

    <transition
      appear
      enter-active-class="transition-opacity transition-transform duration-500 ease-out delay-800"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
    >
      <RouterLink
        class="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white"
        to="/login"
      >
        Log In
      </RouterLink>
    </transition>

    <transition
      appear
      enter-active-class="transition-opacity transition-transform duration-500 ease-out delay-1000"
      enter-from-class="opacity-0 translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
    >
      <RouterLink class="underline text-sm text-white/80 hover:text-white" to="/signup">
        Don’t have an account? Sign up
      </RouterLink>
    </transition>
  </div>
</template>
