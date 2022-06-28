Vue.component('addressbook', {
    template: `
    <div>
    <input placeholder="name" v-model="name">
    <input placeholder="address" v-model="address">
    <button @click="addToList(name, address); name=''; address=''">Add to List</button>
    </div>
    `,
    props: [
        "add-to-list",
        
    ],   // or {}
    data: function(){
        return {
            name:"",
            address:"",
        }
    }
});

Vue.component('showaddresses', {
    template: `
    <div>
        <h1>{{name}}</h1>
        <h2>{{address}}</h2>
        <button @click="removeToList(index);">Remove from List</button>

    </div>
    `,
    props: [
        "name",
        "address",
        "remove-to-list",
        "index",
    ],   // or {}
    // data: function(){
        
    // }
});

var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input

        // list to hold addresses
        addresses: [],
    },
    methods: {
        // function to push address into list, clear input fields
        addToAddresses: function(name, address){
            this.addresses.push({name:name, address:address});
            this.name = "";
            this.address= "";
        },
        removeFromList: function(index){
            this.addresses.splice(index,1);
        }
    },
});