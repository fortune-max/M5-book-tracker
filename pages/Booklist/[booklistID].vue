<script setup>
    const route = useRoute();
    const booklistID = route.params.booklistID;
</script>

<template>
    <div>
        <BooklistRenderer :booklistKey="booklistID" />
    </div>
</template>