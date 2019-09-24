//10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no calculo do lucro.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
let valor_produto, valor_venda, imposto = 20,
    resul_parcial, resul_final
valor_produto = 100
valor_venda = 350
while (valor_venda > 0 && valor_produto > 0) {
    resul_parcial = valor_produto - valor_venda
    resul_final = resul_parcial - (resul_parcial * imposto / 100)
}
console.log(resul_final)