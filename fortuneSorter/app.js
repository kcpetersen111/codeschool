const API_URL = "https://api.justyy.workers.dev/api/fortune";

Vue.component("new-fortune", {
    // display the current fortune in an <h1>
    // display two buttons for sorting
        // The on-click of those buttons will call the function passed in through a prop
    template: `
    <div>
        <h1>{{fortune}}</h1>
        <button @click="sortcallback(fortune,1)">good</button>
        <button @click="sortcallback(fortune,2)">bad</button>
    </div>
    `,
    props: [
        // two props
        "fortune",
        //  - String to hold the fortune text
        "sortcallback",
        //  - Function for sorting the fortune (a method in the Vue instance)
    ]
});

Vue.component("sorted-fortune", {
    // in an <h4> or <div> display the text and bind the 'color' style to your fortune-color prop
    template: `
    <h4 v-bind:style="{color:compcolor}">{{text}}</h4>
    `,
    props: [
        // two props
        //  - String to hold the fortune text
        "text",
        //  - String representing a red/green color to bind the 'color' style
        "compcolor",
    ]
});

var app = new Vue({
    el: "#app",
    data: {
        // a string representing the new fortune (not yet sorted)
        newFortune:"",
        // two arrays which hold all previously sorted fortunes
        goodFortune:[],
        badFortune:[],
    },
    methods: {
        // set the new_fortune to the data from fetch(API_URL) 
            // Try to use 'async / await' rather than '.then()'
        getNewFortune: async function () {
            let response =await fetch(API_URL);
            let data = await response.json();
            this.newFortune = data;
            console.log(data)
        },
        // pushes the fortune given into one of two data arrays (good_fortunes, bad_fortunes)
        sortFortune: function (fortune, category) {
            if(category == 1){
                // good one
                this.goodFortune.push(fortune);
                this.newFortune = "";
                this.getNewFortune()
                return;
            }
            this.badFortune.push(fortune);
            this.newFortune = "";
            this.getNewFortune()

        }
    },
    // Get a new fortune when the app first loads
    created: function () {
        this.getNewFortune();
    }
});