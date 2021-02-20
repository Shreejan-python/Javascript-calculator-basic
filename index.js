function sum(){
    let a = Number(prompt("You are doing addition. Enter the first number"))
    let b = Number(prompt("You are doing addition. Enter the second number"))
    return document.write('The sum of ', a, ' and ', b, ' is ', a + b)

}

subtraact = ()=>{
    let a = Number(prompt("You are doing subtraction. Enter the first number"))
    let b = Number(prompt("You are doing subtraction. Enter the second number"))
    return document.write('The difference between ', a, ' and ', b, ' is ', a - b)
}

multiply = ()=>{
    let a = Number(prompt("You are doing multiplication. Enter the first number"))
    let b = Number(prompt("You are doing multiplication. Enter the second number"))
    return document.write('The product of ', a, ' and ', b, ' is ', a * b)
}

Divide = ()=>{
    let a = Number(prompt("You are doing divide. Enter the first number"))
    let b = Number(prompt("You are doing divide. Enter the second number"))
    return document.write('The quotient when ', a, ' is divided by ', b, ' is ', a / b)
}

Average = ()=>{
    let a = Number(prompt("You are doing average. Enter the first number"))
    let b = Number(prompt("You are doing average. Enter the second number"))

    return document.write('The average of ', a, ' and ', b, ' is ', (a + b)/2)

}