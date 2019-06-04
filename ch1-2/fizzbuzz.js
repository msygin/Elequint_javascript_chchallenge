// Fizzbuzz challenge

//First set up iteration
for (var i = 0; i < 101; i++) {
    //decide if both work first, later test each by itself
    if (i % 5 == 0 && i % 3 == 0 ) {
        console.log("Fizzbuzz");
    }
    else if (i % 5 == 0) {
        console.log("buzz");
    }
    else if (i % 3 == 0) {
        console.log("fizz");
    }
    else{
        console.log(i);
    }
}