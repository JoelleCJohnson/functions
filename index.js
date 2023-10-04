function hello(userName) {
    console.log("Hello " + userName +"!");
}
hello("Lovely");

function add(num1, num2) {
    console.log(num1 + num2);
}

add(1, 4);

function winningPerson(player1, player2){
    let winner = undefined;
    if (player1 > player2){
        winner = "player1"
    }
    else {
        winner = "player2";
    }

    return winner;
}
console.log(winningPerson(200, 100));