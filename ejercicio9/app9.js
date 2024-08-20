
const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            apellido: ''
            };
    },
    computed: {
        nombreCompleto() {
            return `${this.nombre} ${this.apellido}`.trim();
        }
    }
});

app.mount('#app');
