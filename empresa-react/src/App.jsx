import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

  const [contador, setContador] =useState(0)
  
  function aumentarcontador () {
    setContador(contador +1)
  }

  function diminuicontador () {
    setContador(contador -1)
  }





  return (
    <>


        <div className='Container'>


          <h1 className='title'>
           React no Fluxo Real da Empresa
          </h1>


          <p className='text'>
            Valor do Contador: {contador}

            <Card
            title="React"
            description="Biblioteca para criar interfaces modernas."
            />

            <Card
            title="JavaScript"
            description="Linguagem usada no front-end moderno."
            />
          </p>

        </div>


          <div className='buttons'>

          
          <button onClick={aumentarcontador}>
            Aumetar
          </button>

          <button onClick={diminuicontador}>
            Diminuir
          </button>

          </div>


        
  

    </>
  )
}

export default App
