// Questão 5: Criar um servidor em node.js

// Uma requisição GET retorna todos os usuários cadastrados
// Uma requisição POST espera um corpo e adiciona esse corpo ao índice de usuários

const http = require('http');

const hostname = 'localhost';
const port = 8080;

listaDeUsuarios = ['Pedro', 'Laura'];

const server = http.createServer((req, res) => {
    const { method } = req;
    if(method == 'GET'){
        res.end(listaDeUsuarios.toString())
    } else if (method == 'POST') {
        let body = ''

        req.on('data', (data) => {
            body += data;
        })
        
        req.on('end', () => {
            listaDeUsuarios.push(body)
            res.end("Usuário Adicionado")
        });
    } else {
        res.end("Operação desconhecida: abortada!")
    }
})

server.listen(port, hostname, () => {
    console.log(`Ouvindo solicitações em ${hostname}:${port}`)
})