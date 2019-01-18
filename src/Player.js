function Fizzbuzz() {
}

Fizzbuzz.prototype.divisibleby = function(divisor, number) {
  return number % divisor === 0;
}

Fizzbuzz.prototype.play = function(number){
  if (this.divisibleby(15,number)){
    return 'Fizzbuzz'
  } else if (this.divisibleby(3,number)){
    return 'Fizz';
  } else if (this.divisibleby(5,number)){
    return 'Buzz';
  } else {
    return number
  }
}

var fizzBuzz = new Fizzbuzz();

for (var i = 1; i <= 100; i++) {
  // document.body(fizzBuzz.play(i));

document.getElementById("parentID").innerHTML+= fizzBuzz.play(i);
}

// i grabbed the body of index.html file and added fizzbuzz.play(i) to it!




// created a Fizzbuzz object with a method play(number)
