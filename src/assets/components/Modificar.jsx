import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Modificar = ({ b, funcion_modificar }) => {
  const [nombre, setnombre] = useState("")
  const [marca, setmarca] = useState("")
  const [precio, setprecio] = useState(0)
  const [descuento, setdescuento] = useState(0)
  const [stock, setstock] = useState(0)
  const [estado, setestado] = useState("")
  const [descrip, setdescrip] = useState("")

  const cambianombre = (event) => { setnombre(event.target.value) }
  const cambiamarca = (event) => { setmarca(event.target.value) }
  const cambiaprecio = (event) => { setprecio(event.target.value) }
  const cambiadescuento = (event) => { setdescuento(event.target.value) }
  const cambiastock = (event) => { setstock(event.target.value) }
  const cambiaestado = (event) => { setestado(event.target.value) }
  const cambiadescrip = (event) => { setdescrip(event.target.value) }

  const producto_mod = {
    id: b.id,
    descripcion: descrip === "" ? b.descripcion : descrip,
    precioUnitario: precio === 0 ? b.precioUnitario : precio,
    descuento: descuento === 0 ? b.descuento : descuento,
    stock: stock === 0 ? b.stock : stock,
    nombre: nombre === "" ? b.nombre : nombre,
    marca: marca === "" ? b.marca : marca,
    estado: estado === "" ? b.estado : estado,
    modificado: true,
    visible: b.visible,
  }
  return (
    <>
      <div>
        ID = {b.id}
        Nombre = <input placeholder={b.nombre} type="text" onChange={cambianombre} /> -
        Marca = <input placeholder={b.marca} type="text" onChange={cambiamarca} /> -
        Precio = <input placeholder={b.precioUnitario} type="number" onChange={cambiaprecio} /> -
        Descuento = <input placeholder={b.descuento} type="number" onChange={cambiadescuento} /> -
        Precio con descuento = {b.precioUnitario - (b.precioUnitario * b.descuento / 100)} -
        Stock = <input placeholder={b.stock} type="number" onChange={cambiastock} /> -
        Estado = <input placeholder={b.estado} type="text" onChange={cambiaestado} /> -
        Descripcion = <input placeholder={b.descripcion} type="text" onChange={cambiadescrip} /> -
        <button onClick={() => funcion_modificar(producto_mod)}>Guardar</button>
      </div>
    </>
  )
}