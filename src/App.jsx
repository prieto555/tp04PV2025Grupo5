import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Modificar } from './assets/components/Modificar.jsx'
import { MostrarP } from './assets/components/comp_funcionales/MostrarP.jsx'
import { Agregar } from './assets/components/Agregar.jsx'
import { Buscar } from './assets/components/Buscar.jsx'

function App() {
  const [Position, setPosition] = useState('Agregar')
  const [productos, setproductos] = useState([])
  const [buscado, setbuscado] = useState([])
  return (
    <>
      <h1>MENU PRINCIPAL</h1>
      <div >
        <button onClick={() => setPosition('Agregar')}  >
          Agregar
        </button>
        /
        <button onClick={() => setPosition('Buscar')}  >
          Buscar
        </button>
      </div>
      {Position === 'Agregar' ? (
        <Agregar></Agregar>
      ) : (
        <Buscar></Buscar>
      )
      }
    </>
  )
}
export default App