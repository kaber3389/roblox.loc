<script setup>
const state = reactive({
  email: '',
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

const resetForm = () => {
  Object.keys(state).forEach(key => {
    state[key] = key === 'errors' ? {} : '';
  });
};

async function handleFormSubmit() {
  isLoading.value = true
  const {data, status} = await $fetch('/api/user/login', {
    method: 'POST',
    body: state
  });
  console.log(data, status)
  if (status !== 200) {
    state.errors = data?.errors || {};
    toast.add({title: 'Ошибка!', description: 'Ошибка при авторизации, попробуйте позже', color: 'warning'});
  } else {
    toast.add({title: 'Готово!', description: 'Вы успешно авторизовались', color: 'success'});
    resetForm();
  }
  isLoading.value = false;
}
</script>

<template>
  <UForm @submit="handleFormSubmit" :state="state"
         class="flex flex-col mx-auto justify-center max-w-md mt-10 p-6 rounded-lg shadow-md">
    <UFormField label="Email" name="email" size="xl" class="mb-6">
      <UInput
          class="w-full"
          v-model="state.email"
          :placeholder="$t('Input email')"
          @input.prevent="onChangeInput('email')"
      />
      <span v-if="state.errors.email" class="text-red-600 text-sm mt-1 block">{{ state.errors.email.join() }}</span>
    </UFormField>

    <UFormField label="Password" name="password" size="xl" class="mb-6">
      <UInput
          class="w-full"
          type="password"
          v-model="state.password"
          :placeholder="$t('Input password')"
          @input.prevent="onChangeInput('password')"
      />
      <span v-if="state.errors.password" class="text-red-600 text-sm mt-1 block">{{state.errors.password.join()}}</span>
    </UFormField>

    <div class="w-full">
      <UButton
          :loading="isLoading"
          type="submit"
      >
        {{ $t('Send') }}
      </UButton>
    </div>

    <span v-if="state.errors.general" class="text-red-600 mt-4 block">{{ state.errors.general }}</span>
  </UForm>
</template>
