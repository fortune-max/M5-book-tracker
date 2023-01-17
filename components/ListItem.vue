<script setup>
    const props = defineProps(["listItem"]);
</script>

<template>
    <NuxtLink :to="props.listItem.url">
        <div class="border-solid border-2 border-b-green-400 rounded-sm px-4 truncate w-64 text-center inline-block">
            {{ props.listItem.name }}
        </div>
    </NuxtLink>
</template>

<style scoped>
    div {
        background-color: burlywood;
    }
    div:hover {
        background-color: #d9bca9;
    }
</style>