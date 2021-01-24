// Questão 1: Crie um programa que cause um erro por tipagem fraca

let vetor = [1, 2, 3, 4]
vetor.forEach(e => {
    console.log(e)
}); 
vetor += [5] // Um programador novato pode pensar que ao adicionar um vetor ao vetor original, assim como em Python, o interpretador adicione os elementos do novo vetor ao vetor original
vetor.forEach(e => {
    console.log(e)
}); // Ao iterar sobre os elementos do vetor aparece o erro: os vetores foram transformados em string para concatenar, portanto o forEach dá erro