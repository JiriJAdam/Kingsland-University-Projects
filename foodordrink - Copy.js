function foodOrDrink(s) {
    if (s === "curry" || s === "noodles" || s === "sushi" || s === "spaghetti")
        console.log("food");
    else if (s === "tea" || s === "water" || s === "coffee")\
        console.log("drink");
    else
    console.log("unkown");
}
foodOrDrink("sushi"); //food