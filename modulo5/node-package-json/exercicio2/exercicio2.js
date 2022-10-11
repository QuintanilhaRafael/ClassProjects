const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operation) {
    case "add":
        console.log(`Resultado da soma: ${num1 + num2}`);
        break;
    case "sub":
        console.log(`Resultado da subtração: ${num1 - num2}`);
        break;
    case "mult":
        console.log(`Resultado da multiplicação: ${num1 * num2}`);
        break;
    case "div":
        console.log(`Resultado da divisão: ${num1 / num2}`);
        break;
    default:
        console.log('Operação não existente, favor escolher entre as operaçãos add, sub, mult e div.')
        break;
}