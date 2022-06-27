

Vue.component('button-counter',{
    // name:'button-counter',
    data: function(){
        return {
            clicked: 0
        }
    },
    props:[
        "name",
        "color",

    ],

    template: '<button @click="clicked++" v-bind:style="{backgroundColor: color}">{{clicked}} {{name}}</button>',
});

let app = new Vue({
    el:"#app",
    data:{
        test:"success",
        name:"prop test",
    },
})