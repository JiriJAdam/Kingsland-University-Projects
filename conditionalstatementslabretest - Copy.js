//guess the password
function main(input) {
    if (input == "s3cr3t!") {
        console.log("Welcome")
    } else {
        console.log("Wrong password!");
    }
}

// Boiling Water
function main(input) {
    if (input > 100) {
        console.log("The water is boiling")
    } else {
        console.log("The water is not hot enough");
    }
}

// speed info
function main(input) {
    if (input <= 30) {
        console.log("Slow")
    } else {
        console.log("Fast");
    }
}

// area of figures 
function main(input) {
    var size1 = 5;
    var size2 = 3;
    var area2 = 3.14159 * size2 * size2;
    var area = size1 * size1;

    if (input == "square") {
        console.log(area.toFixed(2));
    }
    if (input == "circle") {
        console.log(area2.toFixed(2));
    }
}

// valid triangle 
function main(sideOne,sideTwo,sideThree){
    if (sideOne < (sideTwo + sideThree) ){
        if (sideTwo < (sideOne + sideThree) ){
            if (sideThree < (sideOne + sideTwo) ){
                console.log("Valid Triangle");
            }else{
                console.log("Invalid Triangle");
            }

        }else{
            console.log("Invalid Triangle");
        }
    }else{
        console.log("Invalid Triangle");
    }
}

// coffee shop
function main(drinkName, extra) {
    var price = 0;

    if("coffee" == drinkName){
        price = price + 1.00;
    } else if("tea" == drinkName){
        price = price + 0.60;
    }

    if(extra == "sugar"){
        price = price + 0.40;
    }
    console.log("Final Price: $"+price.toFixed(2));
}



