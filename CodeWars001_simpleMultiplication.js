/*
2018.07.22.SUN.
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
짝수면 8을 곱하고 아니면 9를 곱하도록 하시오.
*/

//나의 답변.

function simpleMultiplication(x) {
  if (x % 2 === 0) {
    return x * 8;
  } else {
    return x * 9;
  }
}

//다른 이들의 답변 4종.


function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}



function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}


const simpleMultiplication = n => n * (n % 2 ? 9 : 8)


function simpleMultiplication(number) {
  if (typeof number === 'number') {
    return number * (8 + number % 2);
  } else {
    console.log(arguments.callee.name + ': Invalid argument');
  }
}
