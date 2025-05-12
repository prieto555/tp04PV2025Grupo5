function Eliminar({ id, eliminarProducto }) {
    return <button onClick={() => eliminarProducto(id)}>Eliminar</button>;
}

export default Eliminar;