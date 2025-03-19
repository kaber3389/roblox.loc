<template>
  <div class="bg-slate-100 dark:bg-slate-800 w-screen h-screen">
    <div class="container mx-auto px-[15%]">
      <div class="flex flex-row justify-between">
        <header class="flex flex-row w-full py-6 justify-between">
          <ul class="flex flex-row gap-3">
            <li :class="{'active': route.path === `/${locale}`}" class="font-bold">
              <NuxtLinkLocale to="/">{{ $t('Home') }}</NuxtLinkLocale>
            </li>
            <li :class="{'active': route.path === `/${locale}/sign-in`}" class="font-bold">
              <NuxtLinkLocale to="/sign-in" loca>{{ $t('Sign-in') }}</NuxtLinkLocale>
            </li>
            <li :class="{'active': route.path === `/${locale}/sign-up`}" class="font-bold">
              <NuxtLinkLocale to="/sign-up">{{ $t('Sign-up') }}</NuxtLinkLocale>
            </li>
          </ul>
          <div class="flex flex-row gap-3">
            <SetColorModeButton/>
            <SetLanguageButton/>
          </div>
        </header>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const {locale} = useI18n();
</script>