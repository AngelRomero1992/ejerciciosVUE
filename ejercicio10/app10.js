const app = Vue.createApp({
    data() {
        return {
            variable: '', // Variable que será observada
            mensaje: ''   // Mensaje que se mostrará cuando la variable cambie
        };
    },
    watch: {
        variable(newValue) {
            // Actualiza el mensaje cuando la variable cambie
            this.mensaje = `El valor de la variable ha cambiado a: ${newValue}`;
        }
    }
});

app.mount('#app');