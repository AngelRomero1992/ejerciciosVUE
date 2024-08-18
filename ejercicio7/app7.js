// utilizamos composition API
const app = Vue.createApp({
    data() {
        return {
            isDarkMode: false
        };
    },
    methods: {
        modooscuro() {
            this.isDarkMode = !this.isDarkMode;
            document.body.className = this.isDarkMode ? 'dark' : 'light';
        }
    },
    mounted() {
        document.body.className = this.isDarkMode ? 'dark' : 'light';
    }
});

app.mount('#app');
