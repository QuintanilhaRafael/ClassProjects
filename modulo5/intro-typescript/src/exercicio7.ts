const userInput7 = require("readline-sync")

const dna : string = userInput7.question("Qual e a cadeia de DNA?")

function convertDnaToRna (dna : string) : void {
    let rna : string = dna
   rna = rna.replaceAll('A', 'U').replaceAll('T', 'A').replaceAll('C', 'X').replaceAll('G', 'C').replaceAll('X', 'G')
    console.log(`O RNA convertido e: ${rna}`)
}

convertDnaToRna(dna)