function Fizzbuzz() {
}

Fizzbuzz.prototype.divisibleby = function(divisor, number) {
  return number % divisor === 0;
}

Fizzbuzz.prototype.play = function(number){
  if (this.divisibleby(3,number)){
    return 'Fizz';
  } else if (this.divisibleby(5,number)){
    return 'Buzz';
  } else {
    return number
  }
}


// created a Fizzbuzz object with a method play(number)
