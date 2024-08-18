
const { createApp, ref } = Vue

const app = createApp({


  setup() {

      const message = ref("Hola");
      const author = ref("Soy Angel")

      const cambiofrase = () => {
          message.value = "";
          author.value = "";
      }
      /*setTimeout(() => {
          message.value = "hola Soy angel";
          author.value = "Estudiante de ULS";
          },3000); */

      return{
          message,
          author,
          cambiofrase,
      }
      //console.log('Hola mundo en vue!')
  }

});
app.mount('#app')

// Opcion #1
/*   createApp({
  setup() {
    const message = ref('Hola mundo en vue!')
    return {
      message
    }
  }
}).mount('#app')
*/
// opcion #2
/*     template: `
  <h1> Hola mundo </h1>
  <p> Desde vue .js</p>

  <p> message <p>
  <p> author <p>
  `, */