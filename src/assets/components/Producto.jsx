import { useState, useEffect } from "react";
function Producto(){
    const [productos, setProductos] = useState ([])
    const [formulario, setFormulario] = useState ({
        id: '',
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: '',
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
        precioUnitario: parseFloat(formulario.precioUnitario),
        descuento: parseFloat(formulario.descuento),
        stock: parseInt(formulario.stock),
        precioConDescuento: parseFloat(formulario.precioUnitario)*(1-parseFloat(formulario.descuento)/100)
    }
    setProductos([...productos, nuevoProducto])
    setFormulario({
        id: '',
        descripcion: '',
        precioUnitario: '',
        descuento: '',
        stock: '',
    })
    }
    return(
        <>
        <h1>Gestion de Productos</h1>
        <form onSubmit={agregarProducto}>
            <input type="text" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleChange} required/>
            <input type="number" name="precioUnitario" placeholder="Precio Unitario" value={formulario.precioUnitario} onChange={handleChange} required/>
            <input type="text" name="descuento" placeholder="Descuento (%)" value={formulario.descuento} onChange={handleChange} required/>
            <input type="number" name="stock" placeholder="stock" value={formulario.stock} onChange={handleChange} required/>
            <button type="submit">Agregar Producto</button>
        </form>
        <h2>Lista de Productos</h2>
        <ul>
            {productos.map ((prod) =>(
                <li key={prod.id}>
                    <strong>{prod.descripcion}</strong> - 
                    Precio: ${prod.precioUnitario.toFixed(2)} - 
                    Descuento: {prod.descuento}% - 
                    Precio Final: ${prod.precioConDescuento.toFixed(2)} - 
                    Stock: {prod.stock} - 
                    ID: {prod.id}
                </li>
            ))}
        </ul>
        </>
    )
}
export default Producto