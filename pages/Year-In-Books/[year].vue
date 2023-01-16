<script setup>
    definePageMeta({
        layout: "no-footer",
    });
    
    const route = useRoute();
    const year = route.params.year;
</script>

<template>
    <div>
        <BooklistRenderer :booklistKey="year" />
    </div>
</template>