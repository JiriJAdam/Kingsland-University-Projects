// fruit or vegetable
function fruitOrVegetable(product) {
    switch(product) {
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
            default:
                console.log("unknown");
    }
}

// day of week
function dayOfWeek(day) {
    switch (day) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;

        default: console.log("Error"); break;
    }
}

// vowel or consonant
function vowelOrConsonant(letter) {
    if (letter === 'A' || letter === 'a' || letter === 'E' || letter === 'e' || letter === 'I' || letter === 'i' || letter === 'O' || letter === 'o' || letter === 'U' || letter === 'u')
        console.log("Vowel");
    else
        console.log("Consonant");
}

// product of 3 numbers sign
function main(n1, n2, n3) {
    if (n1 === 0 || n2 === 0 || n3 === 0)
        console.log("zero");
    else {
        var negativeNumbersCount = 0;
        if (n1 < 0) negativeNumbersCount++;
        if (n2 < 0) negativeNumbersCount++;
        if (n3 < 0) negativeNumbersCount++;
        if (negativeNumbersCount % 2 === 0)
            console.log("Positive");
        else
            console.log("Negative");
    }
}

// sorted numbers
function main(n1, n2, n3) {
    if (n1 < n2 && n2 < n3)
        console.log("Ascending");
    else if (n1 > n2 && n2 > n3)
        console.log("Descending");
    else
        console.log("Not sorted");
}

// vacation expenses
function main(season, type, days) {
    season = season.toLowerCase();
    var price = 0.00;

    if (season == "spring") {
        if (type == "Hotel") {
            price = 30;
        } else {
            price = 10;
        }price = price - (price * .2);
    } else if (season == "summer") {
        if (type == "Hotel") {
            price = 50;
        } else {
            price = 30;
        }
    } else if (season == "autumn") {
        if (type == "Hotel") {
            price = 20;
        } else {
            price = 15;
        }price = price - (price * .3);
    } else if (season == "winter") {
        if(type == "Hotel"){
            price = 40;
        } else {
            price = 10;
        } price = price -(price * .1)
    }
    price = price * days;
    console.log(price.toFixed(2));
}

// cinema
function main(movieType, seatRows, seatsPerRow) {
    var premiereTicket = 12.00 * seatRows * seatsPerRow;
    var normalTicket = 7.50 * seatRows * seatsPerRow;
    var discountTicket = 5.80 * seatRows * seatsPerRow;

    if (movieType == "Premiere") {
        console.log(premiereTicket.toFixed(2));
    } else if (movieType == "Normal") {
        console.log(normalTicket.toFixed(2));
    } else if (movieType == "Discount") {
        console.log(discountTicket.toFixed(2));
    }
}

// operations with numbers 
function main(num1, num2, operator) {
    var result = 0;

    switch(operator) {
        case "+":
            {
                result = num1 + num2;
                console.log(num1 + " " + operator + " " + num2 + " = " + result );
            }
            break;
        case "-":
            {
                result = num1 - num2;
                console.log(num1 + " " + operator + " " + num2 + " = " + result );
            }
            break;
        case "*":
            {
                result = num1 * num2;
                console.log(num1 + " " + operator + " " + num2 + " = " + result );
            }
            break;
        case "/":
            {
                result = num1 / num2;
                console.log(num1 + " " + operator + " " + num2 + " = " + result );
            }
            break;
        case "%":
            {
                result = num1 % num2;
                console.log(num1 + " " + operator + " " + num2 + " = " + result );
            }
            break;
            default;
            {
                console.log("Invalid input, please check.")
        }
    }   
}

// atm
function main(balance, withdrawal, limit) {
    if (withdrawal > limit) {
        console.log("The limit was exceeded.");
    }
    else if (withdrawal > balance) {
        console.log("Insufficient availability.");
    } else {
        console.log("The withdrawal was successful.");
    }
}

// biggest five numbers
function main(num1, num2, num3, num4, num5) {
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        console.log(num2);
    } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        console.log(num3);
    } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
        console.log(num4);
    } else {
        console.log(num5)
    }
}