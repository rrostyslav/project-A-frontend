<script setup lang="ts">
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

defineProps<ButtonProps>();
</script>

<template>
  <button
    tabindex="0"
    data-testid="button"
    :class="[
      'rounded-md font-medium transition-colors duration-200 hover:bg-amber-300 cursor-pointer',
      variant === 'primary' 
        ? 'bg-blue-600 text-white' 
        : variant === 'secondary' 
        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
        : 'border border-gray-300 hover:bg-gray-50',
      size === 'small' 
        ? 'px-3 py-1.5 text-sm' 
        : size === 'medium' 
        ? 'px-4 py-2' 
        : 'px-6 py-3 text-lg',
    ]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
