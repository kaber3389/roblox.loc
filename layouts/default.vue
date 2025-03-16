<template>
    <div class="w-screen h-screen">
        <div class="container mx-auto px-[15%]">
            <header>
                <ul class="flex flex-row gap-3">
                    <li :class="{'active': route.path === '/'}" class="font-bold">
                        <NuxtLink to="/">Главная</NuxtLink>
                    </li>
                    <li :class="{'active': route.path === '/sign-in'}" class="font-bold">
                        <NuxtLink to="/sign-in">Вход</NuxtLink>
                    </li>
                    <li :class="{'active': route.path === '/sign-up'}" class="font-bold">
                        <NuxtLink to="/sign-up">Регистрация</NuxtLink>
                    </li>
                </ul>
            </header>
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