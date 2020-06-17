function marketPlace(product, dayOfWeek) {
    if (product == "Banana")
        if (dayOfWeek == "Weekday")
        console.log("2.50");
    else
    console.log("2.70");
    else if (product == "Apple")
    if (dayOfWeek == "Weekday")
        console.log("1.30");
    else {
        console.log("1.60");
    }
}

marketPlace("Banana", "Weekend");
