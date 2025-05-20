import React, { useState, useMemo } from 'react';
import { MostrarP } from './comp_funcionales/MostrarP.jsx';

export const Buscar = ({ p }) => {
    const [ingreso, setIngreso] = useState(0);
    const [busqueda, setBusqueda] = useState(false)

    const ingresar = (event) => {
        setBusqueda(false)
        setIngreso(parseInt(event.target.value));
    };
    const handleClick = () => {
        setBusqueda(true)
        setAux(resultado)
    }

    const resultado = useMemo(() => {
        const newArreglo = p.filter((producto) => producto.id === ingreso);
        return newArreglo;
    }, [p, ingreso]);


    return (
        <>
            <h2>Buscar Productos</h2>
            <input
                onChange={ingresar}
                placeholder='Ingrese ID del producto'
                type="number"
            />
            <button onClick={handleClick}>Buscar</button>

            {
                busqueda && resultado.length > 0
                    ? <MostrarP p={resultado[0]} />

                    : (busqueda && <h2>El producto ingresado no ha sido encontrado</h2>)
            }


        </>
    );
};
