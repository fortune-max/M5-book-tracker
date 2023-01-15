<script setup>
    const props = defineProps(["goodreadsID"])
    const {data: src} = useFetch('/api/bookcover/' + props.goodreadsID)
</script>

<template>
    <img :src="src" :alt="props.isbn" />
</template>