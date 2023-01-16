<script setup>
    const props = defineProps(["listItem"]);
</script>

<template>
    <span class="border-solid border-2 border-b-green-400 rounded-sm px-4 truncate w-64 text-center inline-block">
        <a :href="props.listItem.url">
            {{ props.listItem.name }}
        </a>
    </span>
</template>