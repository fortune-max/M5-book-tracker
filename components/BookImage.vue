<script setup>
    const props = defineProps(["goodreadsID"])
    const {data: src} = useFetch('/api/bookcover/' + props.goodreadsID)
</script>

<template>
    <a :href="'https://www.goodreads.com/book/show/' + props.goodreadsID">
        <img class="w-32 h-48" :src="src" />
    </a>
</template>