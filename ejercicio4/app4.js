// Importar las funciones necesarias de Vue.js
const { createApp, ref } = Vue;

// Definir el componente InputAlert
const InputAlert = {
    template: `
        <div>
            <input v-model="inputValue" placeholder="Ingresa un valor" />
            <button @click="showAlert">Mostrar Alerta</button>
        </div>
    `,
    setup() {
        // Usar ref para almacenar el valor del input
        const inputValue = ref('');

        // Función para mostrar la alerta con el valor del input
        const showAlert = () => {
            alert(El valor ingresado es: ${inputValue.value});
        };

        return {
            inputValue,
            showAlert
        };
    }
};

// Crear la aplicación Vue
const app = createApp({
    components: {
        InputAlert
    }
});

// Montar la aplicación en el div con id "app"
app.mount('#app');