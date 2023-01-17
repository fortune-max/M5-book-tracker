<script setup>
    import { storeToRefs } from 'pinia';
    import {useUserStore} from '~~/stores/userStore';
    
    definePageMeta({
        validate: async (route) => {
            const userStore = useUserStore();
            const { isLoggedIn } = storeToRefs(userStore);
            if (!isLoggedIn.value) {
                return {statusCode: 401, message: 'You are not logged in'}
            }
            return true;
        }
    });
</script>
<template>
    This is the members Area - you are logged in!
</template>