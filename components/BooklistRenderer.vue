<script setup>
    const props = defineProps(["booklistKey"])
    const {data: booklist} = useFetch('/api/booklist/' + props.booklistKey)
</script>

<template>
    <div class="inline-block">
        <div class="inline-block" v-for="goodreadsID in booklist">
            <BookItem :goodreadsID="goodreadsID" />
        </div>
    </div>
</template>