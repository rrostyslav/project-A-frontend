<script lang="ts" setup>
import { SpriteIcon } from '@/shared/ui/icon'
import { Typography } from '@/shared/ui/typography'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-svh bg-gradient-to-b from-[rgb(15,16,17)] to-[rgb(8,8,8)] px-4 space-y-8 text-white"
  >
    <section class="flex flex-col items-center text-center gap-6">
      <SpriteIcon class="w-14 h-14" color="white" name="linear" />
      <Typography as="h1" typography="title2" weight="medium"> Create your workspace </Typography>
    </section>

    <section
      class="w-full max-w-sm bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col gap-4 m-0"
    >
      <button
        class="flex items-center justify-center gap-2 w-full py-3 bg-white/90 text-black font-medium rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        Continue with Google
      </button>

      <div class="flex items-center text-gray-400">
        <hr class="flex-grow border-gray-600" />
        <span class="px-2 text-sm">or</span>
        <hr class="flex-grow border-gray-600" />
      </div>

      <button
        class="w-full py-3 bg-transparent border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        Continue with Email
      </button>

      <button
        class="w-full py-3 bg-transparent border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        Continue with SAML SSO
      </button>
    </section>

    <section class="max-w-sm text-center text-sm text-gray-400">
      <p class="mb-0">
        Already have an account?
        <RouterLink class="underline hover:text-white" to="/login"> Log in </RouterLink>
      </p>
    </section>
  </div>
</template>
