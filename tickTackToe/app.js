let board = document.querySelectorAll('.cell');
let turn = 0;
for (let i = 0; i < board.length; i++) {
    board[i].onclick = function() {
        if(board[i].innerHTML === '') {
            if (turn == 0) {
                board[i].innerHTML = 'X';
                board[i].style.background = 'lightcoral';
                turn = 1;
            } else if (turn ==1) {
                board[i].innerHTML = 'O';
                board[i].style.backgroundColor = 'powderblue';
                turn = 0;
            }
        }
        let winner = checkWinner();
        // console.log(winner);
        if (winner !== 'No winner') {
            document.querySelector("#winner").innerHTML = winner + ' is the winner!';
            turn = 2;
        }
    }
}

function checkWinner(){
    if (board[0].innerHTML === board[1].innerHTML && board[1].innerHTML === board[2].innerHTML && board[0].innerHTML !== '') {
        return board[0].innerHTML;
    } else if (board[3].innerHTML === board[4].innerHTML && board[4].innerHTML === board[5].innerHTML && board[3].innerHTML !== '') {
        return board[3].innerHTML;
    } else if (board[6].innerHTML === board[7].innerHTML && board[7].innerHTML === board[8].innerHTML && board[6].innerHTML !== '') {
        return board[6].innerHTML;
    } else if (board[0].innerHTML === board[3].innerHTML && board[3].innerHTML === board[6].innerHTML && board[0].innerHTML !== '') {
        return board[0].innerHTML;
    } else if (board[1].innerHTML === board[4].innerHTML && board[4].innerHTML === board[7].innerHTML && board[1].innerHTML !== '') {
        return board[1].innerHTML;
    } else if (board[2].innerHTML === board[5].innerHTML && board[5].innerHTML === board[8].innerHTML && board[2].innerHTML !== '') {
        return board[2].innerHTML;
    } else if (board[0].innerHTML === board[4].innerHTML && board[4].innerHTML === board[8].innerHTML && board[0].innerHTML !== '') {
        return board[0].innerHTML;
    } else if (board[2].innerHTML === board[4].innerHTML && board[4].innerHTML === board[6].innerHTML && board[2].innerHTML !== '') {
        return board[2].innerHTML;
    } else{
        return 'No winner';
    }
}



