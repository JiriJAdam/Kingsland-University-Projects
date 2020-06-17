function sortedNumbers(n1, n2, n3) {
    if(n1 < n2 && n2 < n3)
        console.log("Ascending");
    else if (n1 > n2 && n2 > n3)
        console.log("Descending");
    else
        console.log("Not sorted");
}