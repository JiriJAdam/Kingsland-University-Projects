function main(budget, season, groupSize) {

    var boatPrice = 0;
    var discount = 0;
    var extraDiscount = 0;
    // Calculate the boat price variable

    switch(season) {
        case "Spring":
        {
            boatPrice = 3000;
        }
    break;
    case "Summer":
        {
            boatPrice = 4200;
        }
    break;
    case "Autumn":
        {
            boatPrice = 4200;
        }
    break;
    case "Winter":
        {
            boatPrice = 2600;
        }
    break;
    }

    //Calculate the amount of the dicount based on the boat price
    if (groupSize === 6) {
        discount = boatPrice * 0.1;
    }
    if (groupSize > 6 && groupSize < 12) {
        discount = boatPrice * 0.15;
    }
    if (groupSize >= 12) {
        discount = boatPrice * 0.25;
    }

    //Apply the discount to the boat price
    boatPrice -= discount;

    // See if the extra discount applies for even groups over 6 people, except during the Fall. 
    if (season != "Autumn" && groupSize > 5 && (groupSize % 2 === 0)) {
        extraDiscount = boatPrice * 0.05;
        boatPrice -= extraDiscount;
    }

    //compare the budget and boat price
    if (budget > boatPrice) {
        var remainingBudget= budget - boatPrice;
        console.log("Yes! You have " + remainingBudget.toFixed(2) + " leva left.");
    } else if (budget < boatPrice) {
        var neededBudget = boatPrice - budget;
        console.log("Not enough money! You need " + neededBudget.toFixed(2) + " leva.");
    }

}
main(3000, "Summer", 11);