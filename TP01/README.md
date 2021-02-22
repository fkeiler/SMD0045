# TP01 - Protótipo de Sistema Educacional Digital
Esse é um protótipo de um sistema similar ao Google Classroom, onde professores podem postar anúncios referentes a suas disciplinas para os alunos. Ele simula uma database de verdade utilizando IndexedDB.

## O seu protótipo é descartável ou evolucionário? Justifique.
Evolucionário. Enquanto esse sistema não está pronto para uso, ele dá uma ideia de como seria a interface de usuário do sistema que, após alguns testes e alterações, pode ser usada no sistema final. Ademais, como essa interface foi feita com JavaScript, que é bastante versátil, ela pode facilmente ser integrada em um sistema final.

## Quais as características da linguagem escolhida fazem ela apropriada para o desenvolvimento de um protótipo?
A tipagem fraca e dinâmica facilita na criação rápida do programa, pois ela faz o programa evitar lançar erros e simplesmente converte o máximo possível. (Porém isso pode ser uma dificuldade durante a produção de problemas maiores)

A interação com a interface em HTML através do DOM também permite a rápida alteração da interface de acordo com os desejos do usuário.

E, por último, as interfaces de armazenamento (sessionStorage, localStorage e indexedDB) facilitam a criação de um programa com persistência sem ter que iniciar um banco de dados.

## Que dificuldades você teve no desenvolvimento do protótipo?
A tipagem fraca dificultou a busca por problemas, pois o sistema simplesmente erra discretamente.
A API do IndexedDB também foi um pouco complicada, apesar de ser mais fácil do que iniciar e conectar-se a um banco de dados SQL.

## Quais as vantagens de ter um protótipo desenvolvido antes da implementação do programa efetivo?

Criar protótipos permite verificar se as funcionalidades essenciais do produto funcionam sem precisar desenvolver o programa completo. No caso de protótipos evolutivos também é possível lentamente alterar o rumo do desenvolvimento dependendo do feedback dos usuários.