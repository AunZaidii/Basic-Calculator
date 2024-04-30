const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add() {
    rl.question("Enter the first number: ", function (a) {
        rl.question("Enter the second number: ", function (b) {
            var c = parseFloat(a) + parseFloat(b);
            console.log(
                a," + ",b," = ",c);
            rl.close();
        });
    });
}

function sub() {
    rl.question("Enter the first number: ", function (a) {
        rl.question("Enter the second number: ", function (b) {
            var c = parseFloat(a) - parseFloat(b);
            console.log(
                a," - ",b," = ",c);
            rl.close();
        });
    });
}

function mult() {
    rl.question("Enter the first number: ", function (a) {
        rl.question("Enter the second number: ", function (b) {
            var c = parseFloat(a) * parseFloat(b);
            console.log(
                a," x ",b," = ",c);
            rl.close();
        });
    });
}

function div() {
    rl.question("Enter the first number: ", function (a) {
        rl.question("Enter the second number: ", function (b) {
            var c = parseFloat(a) / parseFloat(b);
            console.log(a," / ",b," = ",c);
            rl.close();
        });
    });
}

rl.question("Following are the operators you can perform\n1: add\n2: subtract\n3: multiply\n4: divide\nChoose the option:  ", function (d) {
    switch (parseInt(d)) {
        case 1:
            add();
            break;
        case 2:
            sub();
            break;
        case 3:
            mult();
            break;
        case 4:
            div();
            break;
        default:
            console.log("Invalid operation choice.");
            rl.close();
            break;
    }
});
