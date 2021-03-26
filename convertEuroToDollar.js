const RATIO = 1.18

const convertEuroToDollar = (nb) =>{
  return nb * RATIO
}

console.log(convertEuroToDollar(100))