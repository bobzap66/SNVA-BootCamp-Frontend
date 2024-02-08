try {
    var x = 10/0;
    if (x == Infinity) {
        throw "arithmetic exception";

    }
    console.log(x);
} catch (error) {
    console.log(error);

} finally {
    console.log("finally block");
}

try {
    var x = 10/3;
    if (x == Infinity) {
        throw "arithmetic exception";

    }
    console.log(x);
} catch (error) {
    console.log(error);

} finally {
    console.log("finally block");
}