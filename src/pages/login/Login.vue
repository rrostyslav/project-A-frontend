<script lang="ts" setup>
import { SpriteIcon } from '@/shared/ui/icon'
import { Typography } from '@/shared/ui/typography'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full h-svh bg-gradient-to-b from-[rgb(15,16,17)] to-[rgb(8,8,8)] px-4 space-y-8"
  >
    <section class="flex flex-col items-center text-center gap-6">
      <sprite-icon class="w-14 h-14" color="white" name="project-a" />
      <Typography as="h1" color="secondary-foreground" typography="title2" weight="medium">
        Log in to Project A
      </Typography>
    </section>

    <section
      class="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-4 p-6"
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

      <button
        class="w-full py-3 bg-transparent border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
      >
        Log in with Passkey
      </button>
    </section>

    <section class="text-center text-sm text-gray-400 max-w-sm">
      Don’t have an account?
      <router-link class="underline hover:text-white" to="/signup"> Sign up </router-link>
    </section>
  </div>
</template>
