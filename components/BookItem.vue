<script setup>
    const props = defineProps(["goodreadsID"]);
</script>

<template>
    <div class="inline-flex flex-col items-center gap-1 p-4">
        <BookImage :goodreadsID="props.goodreadsID" />
        <BookTitle :goodreadsID="props.goodreadsID" />
    </div>
</template>