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

var sigmaNrecursive = function(n)
{
  if(n > 1){
    return n + sigmaNrecursive(n -1);
  }
  else{
    return 1
  }
}

console.log(addNumbers(45,67));
console.log(greaterOf(45,67));

console.log(sigmaNformula(45));
console.log(sigmaNiteration(45));
console.log(sigmaNrecursion(45));
