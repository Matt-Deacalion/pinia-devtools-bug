import { defineStore } from 'pinia';

export const useStore = defineStore('user', {
    state: () => ({
        name: 'no name',
    }),

    actions: {
        updateName() {
            this.name = 'Matt';
        },
    },
})
