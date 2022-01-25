<script setup>
    import { useStore } from './useUserStore';
    const store = useStore();
</script>

<template>
    <h1>{{ store.name }}</h1>
    <button @click="() => store.updateName()">click me</button>
</template>
