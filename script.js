
/*
1.We have two ways of writing a function. The function
declaration is what we've used so far, and the function
 expression is new to us. Rewrite the following function
  declarations using a function expression:
  */
/*// 1.
 function cube(x) {
       return x * x * x;
 }

 */
/*************************************************/
 var cube = function(x) {
   return x * x * x;
 }

 /**************************************************/
/*
// 2.
function fullname(first, last) {
      return first + ' ' + last;
}
*/
var fullname = function(first, last) {
  return first + " " + last;
}

/**********************************************/
/*
// 3.
function power(base, exp) {
      if (exp === 0) {
      return 1;
      }
      return base * power(base, exp - 1);
}
*/
var power = function(base, exp) {
  if(exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
/*******************************************/
/*
// 4.
 function sumCubes(numbers) {
       var total = 0;
       for (var i = 0; i < numbers.length; i++) {
             total = total + cube(numbers[i]);
       }
       return total;
 }
 */
 var sumCubes = function(numbers) {
   var total = 0;
   for(var i = 0; i < numbers.length; i++) {
     total += cube(numbers[i]);
   }
   return total;
 }
 /***************************************/
function each(array, funct) {

  for(var i = 0; i < array.length; i++) {
    funct(array[i]);
  }
}
/********************************************/
/*
function sumCubes(numbers) {
      var total = 0;
      for (var i = 0; i < numbers.length; i++) {
            total = total + cube(numbers[i]);
      }
      return total;
}
*/
function sumCubesUsingEach(numbers) {
  var total = 0;
  each(numbers, function(element) {
    total += cube(element);
  });
  return total;
}
/**************************************************/
/*
5.Write a function called product that calculates
 the product of an array of numbers using a for loop;
  then, refactor it to use each
*/
function product(numbers) {
    var total = 1;
    for(var i = 0; i < numbers.length; i++) {
      total *= numbers[i];
    }
    return total;
}

/*******************************/
function productUsingEach(numbers) {
  var total = 1;
  each(numbers, function(element) {
    total *= element;
  });
  return total;
}
/*******************************************************/
/*
6.Write a function called cubeAll that cubes each number in an array, and returns an array of all the numbers cubed using a for loop;
 then, refactor it to use each.
*/
function cubeAll(array) {
  var total = new Array();
  for(var i = 0; i < array.length; i++) {
      total.push(cube(array[i]));
  }
  return total;
}
/********************************/
function cubeAllUsingEach(array) {
  var total = [];
  each(array, function(element) {
    total.push(cube(element));
  });
  return total;
}
/********************************************************/
/*
7.Write a function called odds that accepts an array as
 a parameter and returns an array of just the odd numbers.
If you wrote it using each, great!
If you used anything else, refactor it to use a for loop.
*/
function odds(array) {
  var oddsArray = new Array();
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 !== 0) {
        oddsArray.push(array[i]);
    }
  }
  return oddsArray;
}
/*******************************/
function oddsUsingEach(array) {
  var oddsArray = new Array();
  each(array, function(element) {
    if(element % 2 !== 0) {
      oddsArray.push(element);
    }
  });
  return oddsArray;
}
/************************************************/
/*
1.Write a function sumByAllElementsMultipliedByFour that takes
 an array as an argument and returns the sum of all elements
  multiplied by four.
*/
function sumByAllElementsMultipliedByFour(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i] * 4;
  }
  return total;
}
/*********************************/
function sumByFourByEach(array) {
  var total = 0;
  each(array, function(element) {
    total += element * 4;
  });
  return total;
}
/*************************************************/
/*
2.Observe that sumByAllElementsMultipliedByFour
 is a terrible name for a function – you should also notice
  that sumByAllElementsMultipliedByFour looks a lot like
  sumCubes and sumSquares. Write a function sumBy that accepts
   two arguments: an array of numbers and a function. The function
    will be invoked upon each element in the array, and its result
    will be used to compute the sum.

function sumBy(numbers, f) {
       // ...
 }
 var numbers = [1, 2, 3, 4];
 sumBy(numbers, square); // => 30
 sumBy(numbers, cube); // => 100
 sumBy(numbers, function(number) {
       return number * 4;
 });
 // => 40
*/
function sumBy(numbers, func) {
  var total = 0;
  each(numbers, function(element) {
    total += func(element);
  });
  return total;
}
/****************************************************/
/*
4.Write a function productBy
that works like sumBy, but for products.
*/
function productBy(numbers) {
  var total = 1;
  each(numbers, function(element) {
    total *= funct(element);
  })
  return total;
}
/******************************************************/
/*
1.Write a function doubleAll that takes an array of numbers
 as a parameter and returns an array of all of those numbers
doubled:
function doubleAll(numbers) {
       // ...
 }
 doubleAll([1, 3, 10, 4, 7]); // => [2, 6, 20, 8, 14]
 */
function doubleAll(numbers) {
  var outputArray =  new Array();
  each(numbers, function(element) {
    outputArray.push(element * 2);
  });
  return outputArray;
}
/******************************************************/
/*
2.Write a function halveAll that takes an array of numbers
 as a parameter and returns an array of
  all of those numbers halved (divided by two).
  */
  function halveAll(numbers) {
    var arrayHalved = new Array();
    each(numbers, function(element) {
      arrayHalved.push(element / 2);
    });
    return arrayHalved;
  }
/****************************************************/
/*
3.Write a function uppercaseAll that takes
an array of strings as a parameter, and returns an array of
 all of those strings, but transformed to upper case.
  You can use toUpperCase to convert a string to upper case.

'hello, world'.toUpperCase(); // => 'HELLO, WORLD'
*/
function uppercaseAll(arrayOfStrings) {
  var outputArray = new Array();
  each(arrayOfStrings, function(element) {
    outputArray.push(element.toUpperCase());
  });
  return outputArray;
}
/****************************************************/
