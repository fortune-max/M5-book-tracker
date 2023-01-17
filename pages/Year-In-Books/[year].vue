<script setup>
    const route = useRoute();
    const year = route.params.year;
</script>

<template>
    <div>
        <BooklistRenderer :booklistKey="year" />
    </div>
</template>