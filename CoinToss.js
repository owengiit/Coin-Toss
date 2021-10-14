for (let time = 1; time <=
 10; time++) {
 n = Math.random()

 function valueTest(value) {
  if (value <= 0.5) {
   return true
  } else {
   return false
  }
 }
 i = valueTest(n)

 function toss(coin) {
  Pr = {
   true: "head",
   false: "tail"
  }
  return Pr[coin]
 }
 flip = toss(i)
 console.log(time + "st toss is a " +
  flip);
}
