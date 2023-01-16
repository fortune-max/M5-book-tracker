<script setup>
    const props = defineProps(["listItems"]);
</script>

<template>
    <div class="flex flex-col gap-2">
        <ListItem v-for="listItem in props.listItems" :listItem="listItem" />
    </div>
</template>