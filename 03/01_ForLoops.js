// Program to add first n natural numbers
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum);
// console.log(i)

/*
let obj = {
  jeet: 90,
  ronnie: 45,
  pooja: 56,
  samay: 57,
  john: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "jeet") {
  console.log(b)
}
*/
