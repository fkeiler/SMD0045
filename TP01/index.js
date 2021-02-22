let dbClassroom
const request = window.indexedDB.open('db_classroom')

request.onerror = () => {
  window.alert('Não foi possível acessar o banco de postagens 😞')
}
request.onsuccess = () => {
  dbClassroom = request.result

  const armazemPostagens = dbClassroom.transaction('postagens', 'readonly').objectStore('postagens')

  armazemPostagens.openCursor().onsuccess = function (event) {
    const cursor = event.target.result
    if (cursor) {
      console.log(cursor.value)
      document.getElementById('postagens').innerHTML +=
      `
      <div class="postagem">
        <h3>${cursor.value.titulo}</h3>
        <p>${cursor.value.corpo}</p>
      </div>
      `
      cursor.continue()
    }
  }
}
request.onupgradeneeded = (event) => {
  dbClassroom = event.target.result

  dbClassroom.onerror = () => window.alert('Erro ao criar a database 😐')

  const armazemPostagens = dbClassroom.createObjectStore('postagens', { keyPath: 'id', autoIncrement: true })

  armazemPostagens.createIndex('data', 'data', { unique: false })
  armazemPostagens.createIndex('titulo', 'titulo', { unique: false })
  armazemPostagens.createIndex('corpo', 'corpo', { unique: false })

  armazemPostagens.transaction.oncomplete = function (event) {
    const postagensStore = dbClassroom.transaction('postagens', 'readwrite').objectStore('postagens')
    postagensStore.add({
      data: new Date(),
      titulo: 'Exemplo de postagem',
      corpo: 'Este é o corpo da postagem'
    })
  }
}

function enviarPostagem() {
  const titulo = document.querySelector('#post-area .titulo').value
  const corpo = document.querySelector('#post-area .corpo').value

  const postagens = dbClassroom.transaction('postagens', 'readwrite').objectStore('postagens')

  postagens.add({
    data: new Date(),
    titulo,
    corpo
  })
}
