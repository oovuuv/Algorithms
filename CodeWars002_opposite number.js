/*
Question.
Very simple, given a number, find its opposite.
문제.
숫자가 주어지면 그 반대 값을 찾아라.
*/

//내가 제출한 답
function opposite(number) {
	if (number !== 0) {
	return number * -1;
    } else {
	return 0
    }
}

//다른사람들의 답.

function opposite(number) {
  return(-number);
}


function opposite(number) {
    return number * (-1);
}


const opposite = number => -number;


const opposite = n => -n;


function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}
