<script setup>
const state = reactive({
    email: '',
    full_name: '',
    password: '',
    errors: []
})

const onChangeInput = (field) => {
    if (!state.errors[field]) {
        return false;
    }
    state.errors[field] = '';
}

async function handleFormSubmit() {
    const response = await $fetch('/api/user-create', {
        method: 'POST',
        body: state
    });

    if (response.status === 'success') {
        //
    } else {
        state.errors = response.data.errors;
    }
}
</script>

<template>
    {{state.errors}}
    <form @submit.prevent="handleFormSubmit" class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700">{{$t('Email')}}</label>
            <input
                type="text"
                id="email"
                v-model="state.email"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                :placeholder="$t('Input email')"
                @input.prevent="onChangeInput('email')"
            />
            <span class="text-red-700" v-if="state.errors.email">{{state.errors.email.join()}}</span>
        </div>
        <div class="mb-6">
            <label for="full_name" class="block text-sm font-medium text-gray-700">{{$t('Full name')}}</label>
            <input
                type="text"
                id="full_name"
                v-model="state.full_name"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                :placeholder="$t('Input full name')"
                @input.prevent="onChangeInput('full_name')"
            />
            <span class="text-red-700" v-if="state.errors.full_name">{{state.errors.full_name.join()}}</span>
        </div>
        <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">{{$t('Password')}}</label>
            <input
                type="password"
                id="password"
                v-model="state.password"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                :placeholder="$t('Input password')"
                @input.prevent="onChangeInput('password')"
            />
            <span class="text-red-700" v-if="state.errors.password">{{state.errors.password.join()}}</span>
        </div>
        <div>
            <button
                type="submit"
                class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            >
                {{$t('Send')}}
            </button>
        </div>
    </form>
</template>