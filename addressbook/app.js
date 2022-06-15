var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input
        name:'',
        address:'',

        // list to hold addresses
        addresses: [],
    },
    methods: {
        // function to add(push) address into list, clear input fields
        recordAddress: function () {
            this.addresses.push({Name:this.name, Address:this.address, display:false, deleted:false});
            this.name = '';
            this.address = '';
        },
        display: function(address){
            address.display = !address.display;
        }
        
    }
})