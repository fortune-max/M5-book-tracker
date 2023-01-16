<script setup>
    const yearList = [
        { name: '2017', url: 'year-in-books/2017'},
        { name: '2018', url: 'year-in-books/2018'},
        { name: '2019', url: 'year-in-books/2019'},
        { name: '2020', url: 'year-in-books/2020'},
        { name: '2021', url: 'year-in-books/2021'},
        { name: '2022', url: 'year-in-books/2022'},
    ]
</script>

<template>
    <div class="m-auto">
        <ListRenderer :listItems="yearList" />
    </div>
</template>