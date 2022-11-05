const num = 22
const str = "Hello World"
const bool = false


function retornaTipo (input : any) : any {
    return typeof input
}

console.log(retornaTipo(num))
console.log(retornaTipo(str))
console.log(retornaTipo(bool))