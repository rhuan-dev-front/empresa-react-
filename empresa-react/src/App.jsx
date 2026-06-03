import { useState } from 'react'
import CardUsuario from './components/CardUsuario'

function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [usuarios, setUsuarios] =useState([])



  function mudarNome(event) {
    setNome(event.target.value)
  }



  function adicionarUsuario() {
    if (nome === "" || email === "") {
      return 
    }

    setUsuarios([...usuarios, { nome, email}])
    setNome('')
    setEmail('')
  }




  return (

    <div className="container">
    
      <h1>Cadastro</h1>


      <input
        type="nome"
        placeholder="Digite seu nome"
        value={nome}
        onChange={mudarNome}
      />



      <input 
      type="email"
      placeholder='Digite um email' 
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      />



      <h2>Usuários cadastrados:</h2>

{usuarios.map((usuario, index) => (
  <CardUsuario
    key={index}
    usuario={usuario}
  />
))}


      <button onClick={adicionarUsuario}>
        Cadastrar
      </button>
 </div>
      
    
  )
}

import './App.css'
export default App
