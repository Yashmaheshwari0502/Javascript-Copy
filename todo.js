console.log('"new" - Add A Todo')
console.log('"List" - List All Todos')
console.log('"delete" - Remove specific Todo')
console.log('"Quit" - Quit App')

let arr = [];
let input = prompt("what would you like to do?");
while (input.toLowerCase() !== 'quit') {
    if (input == 'new') {
        input = prompt("Enter new todo");
        arr.push(input);
        console.log(`${input} added to the list`)
    }
    else if (input == 'list') {
        console.log("*******");
        for (let i = 0; i < arr.length; i++) {
            console.log(`${i}: ${arr[i]}`);
        }
        console.log("*******");
    }

    else if (input == 'delete') {
        input = prompt("Enter index of todo to delete");
        arr.splice(input, 1);
        console.log("Todo removed")
    }
    input = prompt("what would you like to do?")
}
console.log("OK, YOU QUIT THE APP")