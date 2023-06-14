let maximum = parseInt(prompt("Enter a max number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter valid num"));
}

const targetnum = Math.floor(Math.random() * maximum + 1);
console.log(targetnum);

let guess = prompt("Enter guess number");
let total = 1;

while (guess !== targetnum) {
    if (guess === 'q') break;
    if (guess == targetnum) break;
    if (guess > targetnum) {
        total++;
        guess = prompt("Try lower value")
    }
    else if (guess < targetnum) {
        total++;
        guess = prompt("Try Higher value")
    }
    else {
        guess = prompt("Enter a valid number or q to quit")
    }
}


if (guess == 'q') {
    console.log("You quit")
}
else {
    console.log("congrats")
    console.log(`You won in ${total} chances`)
}

