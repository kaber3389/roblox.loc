<script setup>
import * as v from 'valibot'

const schema = v.object({
    email: v.pipe(v.string(), v.email('Invalid email')),
    password: v.pipe(v.string(), v.minLength(4, 'Must be at least 4 characters'))
})

const state = reactive({
    email: '',
    full_name: '',
    password: '',
    role: 'Ученик',
})

const roles = ref(['Ученик', 'Учитель'])

async function handleFormSubmit(event) {
    await $fetch('/api/user-create', {
        method: 'POST',
        body: event.data
    })
}
</script>

<template>
    <UForm :schema="v.safeParser(schema)" :state="state" class="space-y-4" @submit="handleFormSubmit">
        <UFormField label="Email" name="email">
            <UInput v-model="state.email" class="text-gray-900"/>
        </UFormField>

        <UFormField label="FullName" name="text">
            <UInput v-model="state.full_name" class="text-gray-900"/>
        </UFormField>

        <UFormField label="Role" name="role">
            <USelect v-model="state.role" :items="roles"/>
        </UFormField>

        <UFormField label="Password" name="password">
            <UInput v-model="state.password" type="password" class="text-gray-900"/>
        </UFormField>

        <UButton type="submit">
            Отправить
        </UButton>
    </UForm>
</template>