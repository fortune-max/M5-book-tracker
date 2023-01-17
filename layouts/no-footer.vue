<template>
    <div class="page-wrapper">
        <AppHeader/>
        <main>
            <slot/>
        </main>
    </div>
</template>

<style scoped>
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    padding: 20px;
    background-color: #ccd5ae;
    height: inherit;
    flex-grow: 1;
}
</style>
