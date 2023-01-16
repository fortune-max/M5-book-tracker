<script lang="ts" setup>
    const props = defineProps(["goodreadsID"])
    const title = computed(() => {
        const startIdx = props.goodreadsID.match('-|\\.').index + 1
        let title: string = props.goodreadsID.substring(startIdx)
        title = title.replaceAll('-', ' ').replaceAll('_', ' ').trim()
        title = title.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
        return title
    })
</script>

<template>
    <span class="truncate w-40 text-center">
        <a :href="'https://www.goodreads.com/book/show/' + props.goodreadsID">
            {{ title }}
        </a>
    </span>
</template>