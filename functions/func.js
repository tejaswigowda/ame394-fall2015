var addNumbers = function (a, b){
  return a + b;
}

var greaterOf = function (a, b){
  if( a > b){
    return a;
  }
  else if( a < b){
    return b;
  }
  else{
    return "they are equal";
  }
}

var sigmaNiteration = function(n)
{
  var result = 0;
  var i = 1;
  while(i <= n){
    result = result + i;
    i = i + 1;
  }
  return result;
}


var sigmaNformula = function(n)
{
  return n * (n + 1)/2;
}

var sigmaNrecursion = function(n)
{
  if(n > 1){
    return n + sigmaNrecursion(n -1);
  }
  else{
    return 1
  }
}

var fibIteration = function(n)
{
  var fibArr = [0,1];
  var i = 3;
  while(i <= n){
    fibArr[i-1] = fibArr[i-2] + fibArr[i-3]; 
    i = i + 1;
  }
  //return fibArr[n-1];
  return fibArr;
}

var fibRecursion = function(n){
  if(n == 2){
    return [0, 1];
  }
  else if( n == 1){
    return [0];
  }
  else{
    var x = fibRecursion(n-1);
    x[x.length] = x[x.length -1] + x[x.length - 2]
    return x;
  }
}

console.log(addNumbers(45,67));
console.log(greaterOf(45,67));

console.log(sigmaNformula(10));
console.log(sigmaNiteration(10));
console.log(sigmaNrecursion(10));

console.log(fibIteration(10));
console.log(fibRecursion(10));

