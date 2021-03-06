/* MILESTONE 1
Per prima cosa, creiamo il markup statico: 
costruiamo il container e inseriamo l'immagine grande a 
sinistra e le thumbnails sulla destra in modo da poter stilare 
lo slider; avremo così la struttura base e gli stili pronti per 
poterci poi concentrare solamente sull'aspetto logico. */

const app = new Vue({
    el: '#app',
    data: {
        images: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        active_image: 0
    },
    methods: {  
        slide_up(){
            console.log('Slid up');
            if (this.active_image === 0){
                this.active_image += this.images.length
            }
            this.active_image --
            console.log(this.active_image, this);
            
        },
        slide_down(){
            console.log('Slid down');
            this.active_image ++
            console.log(this.active_image);
            if (this.active_image === this.images.length){
                this.active_image = 0
            }
        },
        autoplay(){
            let element = this;
            setInterval(function () {
                element.active_image++
                console.log(element.active_image);
                if (element.active_image === element.images.length){
                    element.active_image = 0
                }
            }, 3000);
        },
    },
    /* mounted () {
        this.autoplay()
      } */
});


/* Adesso rimuoviamo il markup statico in eccesso e 
inseriamo le immagini dinamicamente servendoci della struttura 
dati fornita. Stampiamo prima l'immagine grande e usiamo la direttiva 
v-for per stampare tutti i thumbnails.
Al termine di questa fase ci ritroveremo con lo stesso slider, 
ma costruito dinamicamente attraverso Vue-js. */

/* Ora rendiamo lo slider dimanico. Al click dell'utente sulle 
frecce verso l'alto o verso il basso, l'immagine attiva diventa 
visibile in formato grande a sinistra e nel suo angolo in basso 
a destra dovranno essere aggiunti i relativi: - titolo e - testo.
Allo stesso tempo nelle miniature l'immagine attiva dovrà 
apparire in evidenza rispetto alle altre. */