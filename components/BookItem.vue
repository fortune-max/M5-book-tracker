<script setup>
    const props = defineProps(["goodreadsID"]);
</script>

<template>
    <BookImage :goodreadsID="props.goodreadsID" />
    <BookTitle :goodreadsID="props.goodreadsID" />
</template>