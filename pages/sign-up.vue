<script setup>
const state = reactive({
  email: '',
  username: '',
  password: '',
  errors: {}
})

const isLoading = ref(false)

const toast = useToast()

const onChangeInput = (field) => {
  if (state.errors[field]) {
    state.errors[field] = ''
  }
}

function showToast() {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(toast)
}

async function handleFormSubmit() {
  isLoading.value = true
  const response = await $fetch('/api/user/create', {
    method: 'POST',
    body: state
  });

  if (response.status === 'success') {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
/*    await navigateTo({
      path: '/sign-in',
      query: {
        'show-success-message': 1,
      }
    })*/
  } else {
    isLoading.value = false
    if (response.data.errors) {
      state.errors = response.data.errors
    } else {
      state.errors = { general: 'Произошла ошибка на сервере.' }
    }
  }
  isLoading.value = false
}
</script>

<template>
  <UForm @submit="handleFormSubmit" :state="state" class="max-w-md mx-auto mt-10 p-6rounded-lg shadow-md">
    <UFormField label="Email" name="email" class="mb-6">
      <UInput
          v-model="state.email"
          :placeholder="$t('Input email')"
          @input.prevent="onChangeInput('email')"
      />
      <span v-if="state.errors.email" class="text-red-600 text-sm mt-1 block">{{ state.errors.email.join() }}</span>
    </UFormField>

    <UFormField label="Username" name="username" class="mb-6">
      <UInput
          v-model="state.username"
          :placeholder="$t('Input user name')"
          @input.prevent="onChangeInput('username')"
      />
      <span v-if="state.errors.username" class="text-red-600 text-sm mt-1 block">{{ state.errors.username.join() }}</span>
    </UFormField>

    <UFormField label="Password" name="password" class="mb-6">
      <UInput
          type="password"
          v-model="state.password"
          :placeholder="$t('Input password')"
          @input.prevent="onChangeInput('password')"
      />
      <span v-if="state.errors.password" class="text-red-600 text-sm mt-1 block">{{ state.errors.password.join() }}</span>
    </UFormField>

    <UButton
        :loading="isLoading"
        type="submit"
    >
      {{ $t('Send') }}
    </UButton>

    <UButton label="Show toast" @click="showToast" />

    <span v-if="state.errors.general" class="text-red-600 mt-4 block">{{ state.errors.general }}</span>
  </UForm>
</template>
