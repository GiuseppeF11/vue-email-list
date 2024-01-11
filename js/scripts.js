// Estraggo la funzione creatAppa dall'oggetto Vue
const {createApp} = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp ({
    data() {
        return {
            // Creo un array vuoto
            emails:[],
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        };
    },
    mounted() {
        // Creo un ciclo per generare 10 email
        for (let i = 0; i < 10; i++) {
            // Richiamo Axios
            axios
                // La funzione GET richiede un API che genera email casuali
                .get(this.url) //Il console.log di get è una Promise (la promessa che avrò una certa risposta)
                // La funzione THEN (con argomento 'risposta') restituisce la risposta specifica per la richiesta (la response dentro data è l'email casuale)
                .then((risposta) => {
                    console.log(risposta.data.response);
                    // Metto l'email creata nell'array
                    this.emails.push(risposta.data.response);        
                });
        }
    }
    // Monto l'istanza di Vue in pagina
}).mount('#app');