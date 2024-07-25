<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="email">
        <input type="text" v-model="password">
        <button type="submit">Submit</button>
    </form>
</template>

<script setup lang="ts">
const email = ref('');
const password = ref('');

const emit = defineEmits();

const onSubmit = () => {
    const data = {email, password}
    emit("formData", data);
}
</script>