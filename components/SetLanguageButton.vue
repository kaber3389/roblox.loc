<script setup>
const {setLocale} = useI18n()
</script>

<template>
  <div class="flex gap-2">
    <UButton @click="setLocale('ru')"
             :class="{'text-white': $i18n.locale === 'ru'}"
             class="cursor-pointer"
             variant="outline"
    >
      RU
    </UButton>
    <UButton @click="setLocale('en')"
             :class="{'text-white': $i18n.locale === 'en'}"
             class="cursor-pointer"
             variant="outline"
    >
      EN
    </UButton>
  </div>
</template>

<style scoped>
</style>