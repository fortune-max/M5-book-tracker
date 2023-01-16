<script setup>
    const yearList = [
        { name: 'Favorites', url: 'shelves/5star'},
        { name: 'Before I Die - Unread', url: 'shelves/bid_unread'},
        { name: 'Before I Die - Read', url: 'shelves/bid_read'}
    ]
</script>

<template>
    <div class="flex content-center flex-col">
        <ListRenderer :listItems="yearList" />
    </div>
    
</template>