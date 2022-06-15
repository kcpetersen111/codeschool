var app = new Vue({
    el: "#app",
    data: {
        // row count and column count
        rowCount: 5,
        colCount: 5,
        // mole position (row and column)
        moleRow: 0,
        moleCol: 0,
        // score and total
        score: 0,
        curr:0,
        total:10,
        board: [],
    },
    methods: {
        updateMoleRecursive: function () {
            // use SetTimeout to 
            if (this.curr-2 < this.total) {
                setTimeout(() => {
                    this.updateMoleRecursive()
                },1000);
                
            }
            // 1. change the mole's position
            this.moleRow = Math.ceil(Math.random() * this.rowCount);
            this.moleCol = Math.ceil(Math.random() * this.colCount);
            // 2. update the total
            this.curr++;
            
        },
        hitMole: function () {
            // 1. add 1 to the score
            this.score++;
            // 2. clear the mole off the board
            this.moleRow = -1;
            this.moleCol = -1;
        }
    },
    created: function () {
        // Call Recursive function to start
        for (let index = 0; index < 5; index++) {
            this.board.push([]);
            for (let j = 0; j < 5; j++) {
                this.board[index].push(0);
            }
        }
        this.updateMoleRecursive();
        
    }
});