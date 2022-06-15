var app = new Vue({
    el: '#app',
    data: {
        // input for new dice sides
        newSides: 0,

        // array to hold dice
        dice:[],
    },
    methods: {
        // create new die, push it to our dice array
        addDie: function () {
            this.dice.push({numSides: this.newSides, value:this.newSides});
        },
        // use setInterval, as well as a counter variable (ie. i = 0), to get a random value for the die.
        //   After the counter variable reaches a stopping point (ie. i >= 20), clear the interval.
        rollDie: function (index) {
            let i = 0;
            let interval = setInterval(()=>{
                this.dice[index].value = Math.ceil(Math.random()*this.dice[index].numSides);
                if(i>20){
                    clearInterval(interval);
                }
                i++;
            },20);

        },
        // use the array.splice function to delete the dice at the given index
        deleteDie: function (index) {
            // this.dice = this.dice.slice(0,index)+this.dice.slice(index+1,this.dice.length);
            this.dice.splice(index,1);

        },
        // similar to rolling a single die, but start a setInterval for each die. 
        //   Each interval stopping point (ie. 20) should be more than the previous (ie. 20, 40, 60, ...)
        rollAllDice: function () {
            for(let i =0;i<this.dice.length;i++){
                this.rollDie(i);
            }
        }
    }
})