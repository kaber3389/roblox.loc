<template>
    <h1>Index</h1>
    <pre>{{users}}</pre>
</template>

<script setup>
const users = await $fetch('/api/user-index');
</script>