<script setup>
    definePageMeta({
        layout: "no-footer",
    });

    const yearList = [
        { name: 'Why I Read', url: 'about/why'},
        { name: 'What I Read', url: 'about/what'},
    ]
</script>

<template>
    <div class="flex content-center flex-col">
        <ListRenderer :listItems="yearList" />
    </div>
</template>