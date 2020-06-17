function convertUsdToEur(input) {
    let dollars = parseFloat(input);
    let euro = dollars * 0.883795087;
    console.log("Euro: " + euro");
}
convertUsdToEur("5");