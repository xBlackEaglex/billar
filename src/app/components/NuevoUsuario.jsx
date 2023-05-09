import { useEffect, useState } from 'react';
import styles from '../../styles/NuevoUsuario.module.css'
import NuevoProducto from './NuevoProducto';
import Image from 'next/image';

const NuevoUsuario = (props) => {
    const elemento = props.numElemento
    const handleTotal = props.handle
    const dataPrecios1 = props.dataPrecios

    const [mostrar, setMostrar] = useState(false)
    const [consumidos, setConsumidos] = useState([])
    const [totalPersona, setTotalPersona] = useState(0)
    const [mostrarElemento, setMostrarElemento] = useState(true)

    const handleMostrar = () => {
        setMostrar(!mostrar)
    }

    const handleConsumidos = (producto) => {
        const nuevoConsumido = {
            nombre: producto.producto,
            precio: producto.precio
        }
        setConsumidos([...consumidos, nuevoConsumido])
        setTotalPersona(totalPersona + producto.precio)
        handleTotal(totalPersona + producto.precio, elemento)
    }

    const handleEliminarConsumido = (index) => {
        const confirmDelete = window.confirm("¿Está seguro de que desea eliminar el producto?");
        if (confirmDelete) {
            const precioConsumido = consumidos[index].precio
            const nuevosConsumidos = consumidos.filter((_, i) => i !== index)
            setConsumidos(nuevosConsumidos)
            setTotalPersona(totalPersona - precioConsumido)
            handleTotal(totalPersona - precioConsumido, elemento)
        }
    }
    useEffect(() => {
        handleTotal(totalPersona, elemento)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[totalPersona, elemento])


    const handleMostrarElemento = () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea eliminar la cuenta de este cliente?");
        if (confirmDelete) {
            setMostrarElemento(!mostrarElemento)
            setTotalPersona(0)
        }
    }


    return (
        <div style={!mostrarElemento ? {display: 'none'} : {}} className={styles.container}>
            <div className={styles.productos}>
                <div className={styles.productoAndNombre}>
                    <input className={styles.input} type="text" />
                    {consumidos.map((name, index) => {
                        return (
                            <div className={styles.pAndButton} key={index}>
                                <p className={styles.p}>{name.nombre}</p>
                                <button onClick={() => handleEliminarConsumido(index)}>X</button>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.containerButton}>
                    <p className={styles.total}>total: ${totalPersona} </p>
                    <button className={styles.button} onClick={() => handleMostrar()}><Image className={styles.image} src={'/mas.png'} alt="mas" width={30} height={30} quality={100} /></button>
                    <button className={styles.buttonEliminar} onClick={() => {handleMostrarElemento()}}><Image className={styles.image} src={'/eliminarUsuario.png'} alt="menos" width={25} height={25} quality={100} /></button>
                </div>
            </div>
            <div className={styles.nuevo}>
                {mostrar ? <NuevoProducto dataPrecios={dataPrecios1} handleMostrar={handleMostrar} handleConsumo={handleConsumidos}/> : null}
            </div>
        </div>
    );
}

export default NuevoUsuario;