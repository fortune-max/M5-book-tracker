<script setup>
    const props = defineProps(["booklistKey"])
    const {data: booklist} = useFetch('/api/booklist/' + props.booklistKey)
</script>

<template>
    <div class="p-12">
        <span v-for="goodreadsID in booklist">
            <BookItem :goodreadsID="goodreadsID" />
        </span>
    </div>
</template>