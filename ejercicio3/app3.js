
  const { createApp, ref } = Vue

  const app = createApp({

    setup() {

        const message = ref("Hola");
        const author = ref("Soy Angel")

        const cambiofrase = () => {
            message.value = "****";
            author.value = "*******";
        }
        return{
            message,
            author,
            cambiofrase,
        }
    }

  });
  app.mount('#app')
