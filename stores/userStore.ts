import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    // state
    const name = ref('');
    const loggedIn = ref(false);

    // getters
    const userName = computed(() => name.value);
    const isLoggedIn = computed(() => loggedIn.value);

    // actions
    function login(_name: string, _password: string): void {
        name.value = _name;
        loggedIn.value = true;
        console.log('User logged in: ', name.value)
    }

    function logout(): void {
        name.value = '';
        loggedIn.value = false;
        console.log('User logged out')
    }

    return { userName, isLoggedIn, login, logout};
});