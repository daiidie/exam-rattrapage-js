const podium = (tab) => {
  let top3 = tab
    .sort((a, b) => {
      return b - a
    })
    .slice(0, 3)
  console.log(`${top3[2]}`)
  console.log(`${top3[1]}`)
  console.log(`${top3[0]}`)
}

let scores = [1, 10, 56, 9, 45, 0, 11, 4]
podium(scores)