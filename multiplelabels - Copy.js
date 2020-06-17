function animals(animal) {
    switch(animal) {
        case "dog":
        case "cat":
            console.log("mammal");
            break;
            default:
                console.log("unknown");
                break;
    }
}
animals("dog"); //mammal