/*  HTML Elements*/
const squareInput = document.getElementById('square-input');
const squareAreaBtn = document.getElementById('square-btn-area');
const squarePerimeterBtn = document.getElementById('square-btn-perimeter');
const squareAreaAnswer = document.getElementById('answer-square-area');
const squarePerimeterAnswer = document.getElementById('answer-square-perimeter');


/*  SQUARE  */
console.group("Square");


const squarePerimeter = (squareSide) => {
  const value = (squareSide * 4);
  squarePerimeterAnswer.innerHTML = 'Perimeter: ' + value;
  // return squareSide * 4;
}
// console.log('Each square sides is: ' + squareSide);
// console.log('Square perimeter is: ' + squarePerimeter);

const squareArea = (squareSide) => {
  const value = (squareSide ** 2);
  squareAreaAnswer.innerHTML = 'Area: ' + value;
  // return squareSide ** 2;
}
// console.log('Square area is: ' + squareArea);
console.groupEnd();

/*  TRIANGLE  */
console.group("Triangle");
const triangleBase = 4;
const triangleSide1 = 8;
const triangleSide2 = 8;
const triangleHeight = 7.2;

// console.log(
//   'Triangle sides measure: Triangle base => ' + triangleBase + 
//   ', Triangle side 1 => ' + triangleSide1 +
//   ', Triangle side 2 => ' + triangleSide2 
// );

const trianglePerimeter = (side1, side2, base) => {
  return side1 + side2 + base;
}
// console.log("Triange perimeter: " + trianglePerimeter);
console.groupEnd();

const triangleArea = (base, height) => {
  return (base * height) / 2;
}
// console.log("Triangle area: " + triangleArea);
console.groupEnd();

/*  CIRCLE  */
console.group("Circle");

const radius = 4;
const pi = Math.PI;

const circumference = (radius) => {
  return (2 * pi * radius).toFixed(2);
}
// console.log("Circumference: " + circumference);

const circleArea = () => {
  return (pi * radius ** 2).toFixed(2);
}
// console.log("Area circle: " + areaCircle);

console.groupEnd();




squareAreaBtn.addEventListener('click', () => {
  squareArea(squareInput.value)
});
squarePerimeterBtn.addEventListener('click', () => {
  squarePerimeter(squareInput.value)
});