import React from 'react'

export const MostrarP = ( {p} ) => {
  return (
    <>
        <div>
            ID: {p.id}&nbsp;
            Nombre del Producto: {p.nombre}&nbsp;
            Marca: {p.marca}&nbsp;
            P.unitario: {p.unit}$&nbsp;
            Descuento: {p.descuen}%&nbsp;
            Precio con descuento: {p.unit - (p.unit*p.descuen/100)}&nbsp;
            Stock: {p.stock}&nbsp;
            Estado: {p.estado}&nbsp;
        </div>
    </>
  )
}
