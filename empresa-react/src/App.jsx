import { useState } from 'react'

function App() {
  const [nome, setNome] = useState('')
  const [usuarios, setUsuarios] =useState([])



  function mudarNome(event) {
    setNome(event.target.value)
  }



  function adicionarUsuario() {
    if (nome === "") {
      return 
    }

    setUsuarios([...usuarios, nome])
    setNome('')
  }




  return (

    <div className="container">
    
      <h1>Cadastro</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={mudarNome}
      />

      <p>Olá, {nome}</p>



      <h2>Usuários cadastrados:</h2>

{usuarios.map((usuario, index) => (
  <p key={index}>{usuario}</p>
))}



      <button onClick={adicionarUsuario}>
        Cadastrar
      </button>
 </div>
      
    
  )
}

import './App.css'
export default App
