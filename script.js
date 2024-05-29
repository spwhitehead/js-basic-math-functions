const convertToNum = () => {
    const num1 = Number(document.getElementById("first-number").value);
    const num2 = Number(document.getElementById("second-number").value);
    return [num1, num2];
}

const addNums = () => {
    const [firstNum, secondNum] = convertToNum();
    let sum = firstNum + secondNum;
    alert(sum);
    console.log(sum);
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
    // const squares = squareNums();
    // let sumOfSquares = addNums(squares);
    // alert(sumOfSquares);
    // console.log(sumOfSquares);

    let [firstNum, secondNum] = addNums(squareNums());
    console.log([firstNum, secondNum]);


    // const [square1, square2] = squareNums();
    // let sumSquares = addNums([square1, square2]);
    // alert(`The sum of the squares is: ${sumSquares}`);
    // console.log(sumSquares);

    // let sumOfSquares = addNums(square1, square2);
    // alert(sumOfSquares);
    // console.log(sumOfSquares);
    // alert(firstNum + secondNum)
}

