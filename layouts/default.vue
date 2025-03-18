<template>
    <div class="bg-white dark:bg-black w-screen h-screen">
        <div class="container mx-auto px-[15%]">
            <div class="flex flex-row justify-between">
                <header>
                    <ul class="flex flex-row gap-3">
                        <li :class="{'active': route.path === `/${locale}`}" class="font-bold">
                            <NuxtLinkLocale to="/">{{$t('Home')}}</NuxtLinkLocale>
                        </li>
                        <li :class="{'active': route.path === `/${locale}/sign-in`}" class="font-bold">
                            <NuxtLinkLocale to="/sign-in" loca>{{$t('Sign-in')}}</NuxtLinkLocale>
                        </li>
                        <li :class="{'active': route.path === `/${locale}/sign-up`}" class="font-bold">
                            <NuxtLinkLocale to="/sign-up">{{$t('Sign-up')}}</NuxtLinkLocale>
                        </li>
                    </ul>
                </header>
                <div class="flex flex-col gap-3">
                    <SetLanguageButton />
                    <SetColorModeButton />
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const {locale} = useI18n();
</script>