<script setup>
    import { storeToRefs } from 'pinia';
    import {useUserStore} from '~~/stores/userStore';

    const userStore = useUserStore();
    const { userName, isLoggedIn } = storeToRefs(userStore);
    const { login, logout } = userStore;

    function performLogin() {
        login('JarJar', '1234');
    }

    function performLogout(){
        logout();
        navigateTo('/');
    }

    console.log(login, 'lol', useUserStore);
</script>
<template>
    <div v-if="isLoggedIn">
        <div>
            Welcome {{ userName }}
            <div @click="performLogout" class="inline-block rounded-lg border-black border-2 py-2 px-4 hover:bg-emerald-400 bg-teal-500 cursor-pointer">
                Logout
            </div>
            
        </div>
    </div>
    <div v-else>
        <div @click="performLogin" class="inline-block rounded-lg border-black border-2 py-2 px-4 hover:bg-emerald-400 bg-teal-500 cursor-pointer">
            Log in&nbsp;
        </div>
    </div>
</template>