<script setup>
const { setLocale } = useI18n()
</script>

<template>
    <div>
        <div>
            <button @click="setLocale('ru')"
                    :class="{'bg-blue-500 text-white': $i18n.locale === 'ru'}"
                    class="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
                RU
            </button>
            <button @click="setLocale('en')"
                    :class="{'bg-blue-500 text-white': $i18n.locale === 'en'}"
                    class="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
                EN
            </button>
            <h2>{{ $t('welcome') }}</h2>
        </div>
    </div>
</template>

<style scoped>
</style>