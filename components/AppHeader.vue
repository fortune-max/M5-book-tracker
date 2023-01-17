<template>
    <div>
        <div id="header-container" class="flex items-center justify-between">
            <NuxtLink to="/" class="inline-block mx-12">
                <img src="../public/logo.jpg" alt="logo" class="h-28 w-28" />
            </NuxtLink>
            <LoginButton class="mx-12"/>
        </div>
    
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/year-in-books">Year in Books</NuxtLink>
            <NuxtLink to="/shelves">Shelves</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/members">Members</NuxtLink>
        </nav>
    </div>
</template>

<style scoped>
#header-container, nav {
    background-color: #d9bca9;
}

nav {
    display: flex;
    justify-content: space-around;
}
</style>