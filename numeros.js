const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//.toFixed para definir a quantidade de casas decimais que quero que imprima.
console.log(media.toString())//.toString para converter o valor (2) para binario
console.log(typeof media)
console.log(typeof peso1) 
console.log(typeof Number)