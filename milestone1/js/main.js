'use strict';

// collegamento globale al div con id=app del file index.html
const { createApp } = Vue

// createApp({
//   data() {
//     return {
//         contatti: [
//             {
//                 nome: 'Michele',
//                 avatar: 'img/avatar_1.jpg'
//             },
//             {
//                 nome: 'Fabio',
//                 avatar: 'img/avatar_2.jpg'
//             },
//             {
//                 nome: 'Samuele',
//                 avatar: 'img/avatar_3.jpg'
//             },
//         ]

//     }
//   }
// }).mount('#app')


createApp({
    data() {
        return {
            contatti: [
                {
                    nome: 'Michele',
                    avatar: 'img/avatar_1.jpg'
                },
                {
                    nome: 'Fabio',
                    avatar: 'img/avatar_2.jpg'
                },
                {
                    nome: 'Samuele',
                    avatar: 'img/avatar_3.jpg'
                },
            ],
            contattoSelezionato: null
        }
    },
    methods: {
        selezionaContatto(contatto) {
            this.contattoSelezionato = contatto;
        }
    }
}).mount('#app')

