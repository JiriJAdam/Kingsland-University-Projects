function yesOrNo(choice) {
    switch (choice) {
        case "Y":
            console.log("Yes");
            break;
        case "N":
            console.log("No");
            break;
        default:
            console.log("Invalid response");
            break;
    }
}
yesOrNo("Y"); //Yes