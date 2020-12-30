function fizzBuzz(n) {

  function multipleOf(number, multiple){
    return number % multiple === 0 ?  true: false;
  }

  for (let i = 1; i <= n; i++) {

    let res = "";
    if (multipleOf(i,3)) {
      res += "Fizz"
    }
    if (multipleOf(i,5)) {
      res += "Buzz"
    }
    console.log(res || i)
  }
}
fizzBuzz(15)