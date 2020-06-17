// Rectangle Area
function areaRectangle(length, width) {
    var area = 0.00;
    var perimeter = 0.00;
    var area = length * width;
    var perimeter = 2 * (length + width);
    console.log(area);
    console.log(perimeter);
}

function main(length, width) {
    areaRectangle(length, width)
}

// Console Converter USD to BGN
function main(input) {
    // 2. Console Converter: USD to BGN
    function convertUsdToBgn(input) {
        var dollars = parseFloat(input);
        var Bgn = dollars * 1.79549;
        console.log(Bgn.toFixed(2) + " BGN")
    }
    convertUsdToBgn(input);
}

