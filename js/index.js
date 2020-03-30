new Vue({
    el:'#app',
    data:{
        name:'blessedkono',
        age : 25,
        website:'blessedkono.com',
        error:false,
        success:false,
        items :[
            {item:'moja'},
            {item:'mbili'},
            {item:'tatu'},
            {item:'nne'},
        ]

    },
    methods:{
        greet:function (status) {
            return 'TITLE'+ ' '+ status ;
        },

        add:function () {
             this.age++
        }
    },
    computed:{
         compFunction:function () {
             return {
                 available: this.available,
                 nearby: this.nearby

             }
         }
    }
});

