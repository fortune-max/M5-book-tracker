<script setup>
    const yearList = [
        { name: 'Favorites', url: 'booklist/5star'},
        { name: 'Before I Die - Unread', url: 'booklist/bid_unread'},
        { name: 'Before I Die - Read', url: 'booklist/bid_read'}
    ]
</script>

<template>
    <div class="m-auto">
        <ListRenderer :listItems="yearList" />
    </div>
</template>