
const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'];

const reversed = tab.reverse();
console.log('reversed:', reversed);


for (let i = 0; i < reversed.length; ++i) {
  console.log(`${reversed[i]}, length: ${reversed[i].length}, index: ${reversed.indexOf(i)}`)
}


for (const elem of reversed) {
  console.log(`${elem}, length: ${elem.length}, index: ???`)
 
}

tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}, index: ???`)
})

let index = 0
while (index < reversed.length) {
  console.log(`${tab[index]}, length: ${tab[index].length},  index: ???`)
  ++index
}

index = 0
do {
  console.log(`${tab[index]}, length: ${tab[index].length}, index: ???`)
  ++index
} while (index < tab.length)