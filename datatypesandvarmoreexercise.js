//digit with words
function main(digWithWord) {
    switch (digWithWord) {
        case 'zero':
            console.log(0);
            break;
        case 'one':
            console.log(1);
            break;
        case 'two':
            console.log(2);
            break;
        case 'three':
            console.log(3);
            break;
        case 'four':
            console.log(4);
            break;
        case 'five':
            console.log(5);
            break;
        case 'six':
            console.log(6);
            break;
        case 'seven':
            console.log(7);
            break;
        case 'eight':
            console.log(8);
            break;
        case 'nine':
            console.log(9);
            break;
    }
}

//prime number checker
function main(num) {
    let output = false;
    if (num === 1) {
        output = false;
    } else if (num === 2) {
        output = true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                output = false;
                break;
            }
            output = true;
        }
    }
    console.log(output);
}

//cone
function main(radiusIn, heightIn) {
    let volume = Math.PI * Math.pow(radiusIn, 2) * (heightIn / 3);
    let area = Math.PI * radiusIn * (radiusIn + Math.sqrt(Math.pow(heightIn, 2) + Math.pow(radiusIn, 2)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

//biggest of 3 numbers
function main(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else if (n3 > n1 && n3 > n2) {
        console.log(n3);
    }
}

//binary to decimal
function main(n) {
    let binary = 'n';
    console.log(parseInt(n, 2));
}

//chess board
function main(num) {
    console.log(`<div class="chessboard">`);
    for (i = 0; i < num; i++) {
        console.log(" <div>");
        for (j = 0; j < num; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    console.log(`  <span class="black"></span>`);
                } else {
                    console.log(`  <span class="white></span>`);
                }
            } else {
                if (j % 2 == 0) {
                    console.log(`  <span class="white"></span>`);
                } else {
                    console.log(`  <span class="black"></span>`);
                }
            }
        }
        console.log(" </div>");
    }
    console.log("</div>");
}

//triangle area
function main(x, y, z) {
    let triangleArea = function(side1, side2, side3) {
        let p = (side1 + side2 + side3) / 2;
        let a = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
        return a.toFixed(10);
    }
    console.log(triangleArea(x, y, z));
}