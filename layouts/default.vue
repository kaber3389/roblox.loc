<template>
    <div class="w-screen h-screen">
        <div class="container mx-auto px-[15%]">
            <div class="flex flex-row justify-between">
                <header>
                    <ul class="flex flex-row gap-3">
                        <li :class="{'active': route.path === '/'}" class="font-bold">
                            <NuxtLink to="/">{{$t('Home')}}</NuxtLink>
                        </li>
                        <li :class="{'active': route.path === '/sign-in'}" class="font-bold">
                            <NuxtLink to="/sign-in">{{$t('Sign-in')}}</NuxtLink>
                        </li>
                        <li :class="{'active': route.path === '/sign-up'}" class="font-bold">
                            <NuxtLink to="/sign-up">{{$t('Sign-up')}}</NuxtLink>
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
console.log(route)
</script>

<style scoped>
ul li.active a {
    text-decoration: underline;
}
</style>