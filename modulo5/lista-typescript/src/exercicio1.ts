const nome : string = "Rafael"
const dataDeNascimento : string = "18/05/1992"

function separaData (
    nome: string,
    dataDeNascimento: string) :string{
        const dataSeparada = dataDeNascimento.split('/')
        const frase : string = `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
        return frase
    }

    console.log(separaData(nome, dataDeNascimento))