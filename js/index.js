Vue.component('greeting',{
    template:'<p>Helllo this is my first component {{name}} . <button v-on:click="changeName">Change Name</button></p>',
    data:function () {
        return {
            name:'blessedkono'
        }
    },
    methods:{
        changeName:function () {
            this.name = 'new Blessedkono';
        }
    },
});



new Vue({
    el: '#vue-app-one',
    data: {
        title: 'This is title one',
        ended: false
    },
    methods: {

    },
    computed: {

    }
});

new Vue({
    el: '#vue-app-two',
    data: {
        title: 'This is title two',
        ended: false
    },
    methods: {

    },
    computed: {

    }
});