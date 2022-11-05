enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number

}

function createType (
    nome: string,
    anoDeLancamento: number,
    genero: GENERO,
    pontuacaoCrit?: number) : object {

        if (!pontuacaoCrit) {
            const movieExemple : Movie = {
                nome: nome,
                anoLancamento: anoDeLancamento,
                genero: GENERO.ACAO
            }
            return movieExemple
        } else {
            const movieExemple : Movie = {
                nome: nome,
                anoLancamento: anoDeLancamento,
                genero: GENERO.ACAO,
                pontuacao: pontuacaoCrit
            }
            return movieExemple
        }
}

console.log(createType("Piratas do Caribe", 2003, GENERO.ACAO, 4.7))
console.log(createType("Piratas do Caribe", 2003, GENERO.ACAO))