describe('Fizzbuzz', function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('Multiples of 3', function() {
    it('Gives fizz with 3', function(){
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it('Gives fizz with 6', function(){
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
  });

  describe('Multiples of 5', function(){
    it('Gives buzz with 5', function(){
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
    it('Gives buzz with 20', function(){
      expect(fizzbuzz.play(20)).toEqual('Buzz');
    });
  });

  describe('Multiples of 3 and 5', function(){
    it('Gives fizzbuzz with 30', function(){
      expect(fizzbuzz.play(30)).toEqual('Fizzbuzz');
    });
    it ('Gives fizzbuzz with 45', function(){
      expect(fizzbuzz.play(45)).toEqual('Fizzbuzz');
    });
  });

});
