function Perfil(nome, senha) {
    let password = senha;

    function auth(entrada){
        return entrada === password
    }

    function pwdChange(senhaAntiga, senhaNova){
        if(senhaAntiga === password){
            password = senhaNova
            return true
        }else{
            return false
        }
    }

    return {
        username: nome,
        autenticar: auth,
        trocarSenha: pwdChange
    }
}

let Joao = Perfil('xXJoaoNoScoperXx', '12345')

console.log("Nome de usuário do João: " + Joao.username)
console.log("Senha do João: " + Joao.password)
console.log("Senha = 12345? " + Joao.autenticar('12345'))