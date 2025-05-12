import React from 'react'

export const MostrarP = ( {p} ) => {
  return (
    <>
        <div>
            ID: {p.id}&nbsp;
            Nombre del Producto: {p.nombre}&nbsp;
            Marca: {p.marca}&nbsp;
            P.unitario: {p.precioUnitario}$&nbsp;
            Descuento: {p.descuento}%&nbsp;
            Precio con descuento: {p.precioUnitario - (p.precioUnitario * p.descuento / 100)}&nbsp;
            Stock: {p.stock}&nbsp;
            Estado: {p.estado}&nbsp;
            Descripcion: {p.descripcion}&nbsp;
        </div>
    </>
  )
}
