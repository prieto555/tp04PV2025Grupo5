import React from 'react'
import { MostrarP } from './comp_funcionales/MostrarP.jsx'
import { useState } from 'react'

export const Buscar = ({p}) => {
    const [ingreso, setIngreso] = useState (0);
    const [aux, setAux] = useState([]);
    const [busqueda, setBusqueda] = useState(false);
    const ingresar = (event)=>{
        setIngreso(parseInt(event.target.value));
    }
    const buscarProducto =(id)=>{
        const aux = p.filter((arreglo)=>arreglo.id===id);
        setAux(aux);
  }
  return (
    <>
        <h2>Buscar Productos</h2>
        <input onChange={ ingresar } placeholder='Ingrese nombre o ID' type="number" />
        <button onClick={ ()=> {buscarProducto(ingreso);setBusqueda(true)} }>Buscar</button>
        {
            aux.length > 0 ? (<MostrarP p={ aux[0] }></MostrarP>) : (busqueda && <h2>El producto ingresado no ha sido encontrado</h2>)
        }
    </>
  )
}
