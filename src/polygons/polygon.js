/*  SQUARE  */
console.group("Square");
const squareSide = 8;
console.log('Each square sides is: ' + squareSide);

const squarePerimeter = squareSide * 4;
console.log('Square perimeter is: ' + squarePerimeter);

const squareArea = squareSide ** 2;
console.log('Square area is: ' + squareArea);
console.groupEnd();

/*  TRIANGLE  */
console.group("Triangle");
const triangleBase = 4;
const triangleSide1 = 8;
const triangleSide2 = 8;
const triangleHeight = 7.2;

console.log(
  'Triangle sides measure: Triangle base => ' + triangleBase + 
  ', Triangle side 1 => ' + triangleSide1 +
  ', Triangle side 2 => ' + triangleSide2 
);

const trianglePerimeter = triangleBase + triangleSide1 + triangleSide2;
console.log("Triange perimeter: " + trianglePerimeter);
console.groupEnd();

const triangleArea = (triangleBase + triangleHeight) / 2;
console.log("Triangle area: " + triangleArea);
console.groupEnd();

/*  CIRCLE  */
console.group("Circle");

const radius = 4;
const pi = Math.PI;

const circumference = (2 * pi * radius).toFixed(2);
console.log("Circumference: " + circumference);

const areaCircle = (pi * radius ** 2).toFixed(2);
console.log("Area circle: " + areaCircle);

console.groupEnd();