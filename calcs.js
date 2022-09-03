const calculator = (problem) => {
    let result = 0;
    let arr = problem.split(" ")
    if (arr[1] === "+") {
        // add the numbers
        result = parseInt(arr[0]) + parseInt(arr[2])
    } else if (arr[1] === "-") {
        //subtract
        result = parseInt(arr[0]) - parseInt(arr[2])
    } else if (arr[1] === "*") {
        //Multiply
        result = parseInt(arr[0]) * parseInt(arr[2])
    } else if (arr[1] === "%") {
        //modulus
        result = parseFloat(arr[0]) % parseFloat([2])
    } else if (arr[1] === "/") {
        //modulus
        result = parseInt(arr[0]) / parseInt([2])
    }
    console.log(arr)
    return result
}

console.log(calculator("3482 + 2433"))
console.log(calculator("34 - 33"))
console.log(calculator("15 * 67"))
console.log(calculator("7 % 4"))
console.log(calculator("8723 / 7"))