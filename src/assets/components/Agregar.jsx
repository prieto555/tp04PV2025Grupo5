import { useState, useEffect } from "react";
import React from 'react'
import { Modificar } from "./Modificar";
import { Buscar } from "./Buscar";
export const Agregar = () => {
    const [productos, setProductos] = useState ([])
    const [formulario, setFormulario] = useState ({
        id: '',
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: '',
        nombre: '',
        marca: '',
        estado: "",
        modificado:true,
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormulario({ ...formulario, [name]: value})
    }
    const agregarProducto = (e) => {
        e.preventDefault()
        const nuevoProducto = {
            ...formulario,
            id: Date.now(),
            nombre: formulario.nombre,
            marca: formulario.marca,
            precioUnitario: parseFloat(formulario.precioUnitario),
            descuento: parseFloat(formulario.descuento),
            stock: parseInt(formulario.stock),
            estado: formulario.estado,
            descripcion: formulario.descripcion,
            precioConDescuento: parseFloat(formulario.precioUnitario)*(1-parseFloat(formulario.descuento)/100)
            
        }
        setProductos([...productos, nuevoProducto])
        setFormulario({
            id: '',
            descripcion: '',
            precioUnitario: '',
            descuento: '',
            stock: '',
            nombre: '',
            marca: '',
            estado: "",
            modificado:true,
        })
    }
    const agregar_modificado=(producto_mod)=>{
        const nuevo_arreglo = productos.map(t=>{
            if (t.id === producto_mod.id) {
                return producto_mod;
            }
            return t;
        }
        )
        setProductos(nuevo_arreglo)
    }
    useEffect(()=>{
        console.log(productos)
    },[productos])
    return(
        <>
        <h1>Gestion de Productos</h1>
        <form onSubmit={agregarProducto}>
            <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required/>
            <input type="text" name="marca" placeholder="Marca" value={formulario.marca} onChange={handleChange} required/>
            <input min="0" type="number" name="precioUnitario" placeholder="Precio Unitario" value={formulario.precioUnitario} onChange={handleChange} required/>
            <input min="0" type="number" name="descuento" placeholder="Descuento (%)" value={formulario.descuento} onChange={handleChange} required/>
            <input min="0" type="number" name="stock" placeholder="stock" value={formulario.stock} onChange={handleChange} required/>
            <input type="text" name="estado" placeholder="Estado(True/False)" value={formulario.estado} onChange={handleChange} required/>
            <input type="text" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleChange} required/>
            <button type="submit">Agregar Producto</button>
        </form>
        {productos.length>0&&<h2>Lista de Productos</h2>}
        <ul>
            {productos.map ((prod) =>(
                <li key={prod.id}>
                    <button>Eliminar</button>
                    <button onClick={() => {setProductos(productos.map(a =>
                    a.id === prod.id ? { ...a, modificado: !a.modificado } : a
                    ));} }>Modificar</button>
                    { prod.modificado===false ? (
                        <Modificar b={prod} funcion_modificar={agregar_modificado}></Modificar>
                    ) : (
                        <div>
                            ID: {prod.id} -
                            Nombre = {prod.nombre} -
                            Marca = {prod.marca} -
                            Precio: ${prod.precioUnitario} - 
                            Descuento: {prod.descuento}% - 
                            Precio Con Descuento: ${prod.precioConDescuento} - 
                            Stock: {prod.stock} - 
                            Estado: {prod.estado} -
                            Descripcion: {prod.descripcion}
                        </div>
                        )
                    }
                </li>
            ))}
        </ul>
        <Buscar p={ productos }>Texto</Buscar>
        </>
    )
}
