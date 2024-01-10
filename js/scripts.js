// Estraggo la funzione creatAppa dall'oggetto Vue
const {createApp} = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp ({
    data() {
        return {
            // Creo un array vuoto
            emails:[]
        };
    },
    mounted() {
        // Creo un ciclo per generare 10 email
        for (let i = 0; i < 10; i++) {
            // Richiamo Axios
            axios
                // Con GET richiamo un API che genera email casuali
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                //
                .then((email) => {
                    console.log(email.data.response);
                    // Metto l'email creata nell'array
                    this.emails.push(email.data.response);        
                });
        }
    }
    // Monto l'istanza di Vue in pagina
}).mount('#app');