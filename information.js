const information = (first, name, age, gender) => {
  console.log(`prenom: ${first}`)
  console.log(`nom: ${name}`)
  console.log(`age: ${age}`)
  if (age >= 18 && gender === 'M') {
    console.log(`Monsieur, vous êtes majeur depuis ${age - 18} ans`)
  }  else if (gender === 'F') {
    console.log(`Madame, vous serez majeur dans ${18 - age} ans`)
  } else  {
    console.log(`Vous serez majeur dans ${18 - age} ans`)
  }
}


information('Sofiane', 'Akermoun', 39,'M')
information('Alice', 'Liddell', 7,'F')
information('Valerie', 'Dupont', 7, '?')