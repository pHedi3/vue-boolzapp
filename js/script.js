Vue.config.devtools = true;

var app = new Vue({

    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        newMessage: '',
        curIndex: 0,
        nameSerch: '',
        nameSerchArray: null


    },
    mounted() {
        this.filterName(this.contacts, this.nameSerch)
        console.log(this.nameSerchArray)
    },
    methods: {
        createTree: function (code) {
            return './img/avatar' + code + '.jpg'
        },
        filterMessage: function (status) {
            if (status == 'sent') {
                return 'col-7 offset-5 utent-message'
            } else if (status == 'received') {
                return 'col-7 account-message'
            }
        },
        sentNewMessage: function (where) {
            where.push({
                data: '10/06/2021 17:16:34',
                text: this.newMessage,
                status: 'sent'
            })
            newMessage = ''
            this.reciveMessage(where)

        },
        reciveMessage: function (where) {
            setTimeout(() => {
                where.push({
                    data: '10/06/2021 17:16:36',
                    text: 'ok',
                    status: 'received'
                })
            }, 1000);
        },
        filterName: function (array, text) {
            this.nameSerchArray = array.filter((element) => {
                if (element.name.includes(text) || text == '') {
                    return true
                } else {
                    return false
                }
            })
        }

    }

})