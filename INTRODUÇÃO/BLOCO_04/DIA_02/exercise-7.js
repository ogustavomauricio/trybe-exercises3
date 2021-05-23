let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for(let index = 1;index <numbers.length;index+=1){
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}

console.log(menorValor)

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1