// Calculate Speed
function main(distance, time) {
    function distanceTime(distance, time) {
        return distance / time;
    }
    var speedOne =
        distanceTime(distance, time);
    console.log(speedOne);
}

// Currency Converter
function main(input) {
    //function code
    function convertUsdToEur(input) {
        var dollars = parseFloat(input);
        var eur = dollars * 0.88;
        console.log(eur.toFixed(2) + ' EUR');
    }
    convertUsdToEur(input);
}

// Inches to Centimeters
function main(inches) {
    var centiMeter = 0.00;
    centiMeter = (inches * 1) * 2.54;
    console.log(centiMeter);
}
