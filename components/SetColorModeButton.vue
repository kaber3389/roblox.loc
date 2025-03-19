<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        variant="ghost"
        :class="{
          'text-white': isDark,
          'text-black': !isDark
        }"
        @click="isDark = !isDark"
        :aria-label="isDark ? $t('Switch to Light Mode') : $t('Switch to Dark Mode')">
    </UButton>
    <template #fallback>
      <div class="size-12" />
    </template>
  </ClientOnly>
</template>

<style scoped>
/* Дополнительные стили можно добавить по желанию */
</style>
