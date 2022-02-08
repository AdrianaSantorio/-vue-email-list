console.log('Vue ok', Vue);
console.log('Axios ok', axios);
Vue.config.devtools = true;


const root = new Vue({
    el:'#root',
    data: {
        mails:[],
        itemsNumber: 10,
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                this.mails.push(res.data.response);
            });
        },
    },
    mounted(){
        for (let i = 0; i < this.itemsNumber; i++) {
            this.getRandomEmail()
        }
    },

})