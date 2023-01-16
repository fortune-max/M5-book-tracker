<template>
    <div>
        <NuxtLink to="/">
            <img src="../public/logo.jpg" alt="logo" class="h-32 w-32" />
        </NuxtLink>
    
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/year-in-books">Year in Books</NuxtLink>
            <NuxtLink to="/shelves">Shelves</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </nav>
    </div>
</template>

<style scoped>
div {
    background-color: #d9bca9;
}

nav {
    display: flex;
    justify-content: space-around;
}
</style>