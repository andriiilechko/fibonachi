function fib(n) {
  var num;
  if (n >= 2) {
    num = fib(n - 1) + fib(n - 2);
  } else {
    num = n
  }
  return num;
}
var userNum=+prompt('Введіть порядковий номер числа Фібоначчі');
alert(fib(userNum));
