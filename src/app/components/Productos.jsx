import { useState } from 'react';
import styles from '../../styles/Productos.module.css'
import Image from 'next/image';
import NuevoProducto from './NuevoProducto';

const Productos = () => {

    const [mostrarNuevo, setMostrarNuevo] = useState(false)

    const handleMostrar = () => {
        setMostrarNuevo(!mostrarNuevo)
    }

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <button onClick={() => handleMostrar()}><Image className={styles.image} src={'/mas.png'} alt="mas" width={25} height={25} quality={100} /></button>
            </div>
            {mostrarNuevo ? <NuevoProducto /> : null }
        </div>
    );
}

export default Productos;