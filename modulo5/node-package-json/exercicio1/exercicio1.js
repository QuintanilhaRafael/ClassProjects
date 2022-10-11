//  Como fazemos para acessar os parâmetros passados na linha de comando para o Node? R: process.argv[]

const userName = process.argv[2]
const userAge = Number(process.argv[3])
const newArg = (name, age) => {
console.log(`Meu nome é ${name.charAt(0).toUpperCase() + name.slice(1)}, tenho ${age} anos de idade.`)
}
newArg(userName, userAge)