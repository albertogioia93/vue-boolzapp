'use strict';
const { createApp } = Vue
createApp({
  data() {
    return {
      newMessage: '',
      messages: [],
      contatti: [
        {
          nome: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            }
          ]
        },
        {
          nome: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            }
          ]
        },
      ],
      contattoSelezionato: null,
      // 1: HO AGGIUNTO QUESTO FILTRO IN DATA
      filtro: '',
    }
  },
  methods: {
    selezionaContatto(contatto) {
      this.contattoSelezionato = contatto;
    },
  },
  computed: {
    // 3: HO AGGIUNTO QUESTO CONTATTI FILTRATI IN COMPUTED
    contattiFiltrati() {
      return this.contatti.filter(contatto =>
        contatto.nome.toLowerCase().includes(this.filtro.toLowerCase())
      );
    },
    // FINO A QUI
    primoMessaggioSent() {
      if (!this.contattoSelezionato) {
        return '';
      }
      const messaggiSent = this.contattoSelezionato.messages.filter(messaggio => messaggio.status === 'sent');
      if (messaggiSent.length > 0) {
        return messaggiSent[0].message;
      } else {
        return '';
      }
    },
    primoMessaggioReceived() {
      if (!this.contattoSelezionato) {
        return '';
      }
      const messaggiReceived = this.contattoSelezionato.messages.filter(messaggio => messaggio.status === 'received');
      if (messaggiReceived.length > 0) {
        return messaggiReceived[0].message;
      } else {
        return '';
      }
    }
  },
}).mount('#app')