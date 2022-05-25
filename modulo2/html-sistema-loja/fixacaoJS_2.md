```function calculaPrecoTotal(quantidade) {
  let custoTotal = 0
  if (quantidade>=12){
    custoTotal = quantidade
  }else{
    custoTotal = quantidade*1.30
  }
  return custoTotal
}```