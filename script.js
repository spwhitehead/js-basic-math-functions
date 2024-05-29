const convertToNum = () => {
    const num1 = Number(document.getElementById("first-number").value);
    const num2 = Number(document.getElementById("second-number").value);
    return [num1, num2];
}

const addNums = (num1, num2) => {
    if (num1 === undefined || num2 === undefined) {
        [num1, num2] = convertToNum();
    }
    let sum = num1 + num2;
    alert(sum);
    console.log(sum);
    return sum;
}
const multiplyNums = () => {
    const [firstNum, secondNum] = convertToNum();
    let product = firstNum * secondNum;
    alert(product);
    console.log(product);
}
const squareNums = () => {
    const [firstNum, secondNum] = convertToNum();
    let square1 = firstNum * firstNum;
    let square2 = secondNum * secondNum; 
    alert(`Square of the first number: ${square1}\nSquare of second number: ${square2}`);
    console.log(square1);
    console.log(square2);
    return [square1, square2]
}
const addSquares = () => {
    let [square1, square2] = squareNums();
    let sumOfSquares = addNums(square1, square2);
    alert(`Sum of squares: ${sumOfSquares}`);
    console.log(sumOfSquares);
}

