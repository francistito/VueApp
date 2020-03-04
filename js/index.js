// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello bleesedkono!'
//     }
// });
// app.message = 'i have change  data';
//
// var app2 = new Vue({
//     el:'#app2',
//     data: {
//         message: 'This is done data'
//     }
// })
//
// // for loop
// var app3 = new Vue({
//     el:'#app3',
//     data:{
//         todos: [
//             {text:'test for loop for vue js'},
//             {text:'test for loop for vue js2'},
//             {text:'test for loop for vue js3'},
//         ]
//     }
// });
//
// // input button
// var app4 = new Vue({
//     el:'#app4',
//     data: {
//         message: 'Hello Vue.js!'
//     },
//     methods:{
//         viewMessage:function () {
//             this.message =  this.message.split('').reverse().join('')
//         },
//     }
// })
// //input text
// var app5 = new Vue({
//     el:'#app5',
//     data:{
//         message:'hello its an input'
//     }
// })

// first vue component
Vue.component('todo-item', {
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
    el:'#app',
    data:{
        list:[
            {id:1, text:'first item'},
            {id: 2, text: 'second item'},
            {id:3, text:'third item'}
        ]
    }
})