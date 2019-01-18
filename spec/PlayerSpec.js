describe('Fizzbuzz', function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('Multiples of 3', function() {
    it('Gives fizz with 3', function(){
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  });

});
