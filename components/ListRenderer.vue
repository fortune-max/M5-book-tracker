<script setup>
    const props = defineProps(["listItems"]);
</script>

<template>
    <span class="inline-flex flex-col gap-2 items-center">
        <ListItem v-for="listItem in props.listItems" :listItem="listItem" />
    </span>
</template>