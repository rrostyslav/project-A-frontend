<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { GuestLayout } from '@/shared/ui/layouts'
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition
      appear
      enter-active-class="transition transform duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition transform duration-300 ease-out"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      mode="out-in"
    >
      <component :is="route.meta.layout || GuestLayout" :key="route.fullPath">
        <component :is="Component" />
      </component>
    </transition>
  </router-view>
</template>
