// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'GOOD' en éxecutant le programme
let password = '@au!ie,ctsrnmç'

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)
