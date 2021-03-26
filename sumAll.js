const sumall = (tab) => {
  let sum = 0
  for (const elem of tab) {
    sum += elem
  }
  return sum 
}

console.log(sumall([100, 15, 28, 36, 41, 52, 6, 7, 8, 9, 10]))
console.log(sumall([105, 10, 17]))