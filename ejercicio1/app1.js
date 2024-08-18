import { reactive } from 'vue';

export default {
  setup() {
    // Crear un objeto reactivo para almacenar el nombre
    const user = reactive({
      name: 'Juan' // Cambia el nombre aquí según prefieras
    });

    return {
      user
    };
  }
};