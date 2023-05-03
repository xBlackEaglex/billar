import { useState } from 'react';
import styles from '../../styles/Productos.module.css'
import Image from 'next/image';
import NuevoUsuario from './NuevoUsuario';


const Productos = (props) => {

    const prop = {...props}

    const [mostrarNuevo, setMostrarNuevo] = useState([])

    const handleMostrar = () => {
        setMostrarNuevo([...mostrarNuevo, <NuevoUsuario handle={prop.handle} numElemento={mostrarNuevo.length} key={mostrarNuevo.length} />]);
    }

    const handleEliminar = () => {
        setMostrarNuevo(mostrarNuevo.slice(0, -1));
    };

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <button onClick={() => handleMostrar()}><Image className={styles.image} src={'/newUser.png'} alt="mas" width={25} height={25} quality={100} /></button>
                <button onClick={() => {handleEliminar(); props.handleBorrar()}}><Image className={styles.image} src={'/eliminarUsuario.png'} alt="menos" width={25} height={25} quality={100} /></button>
            </div>
            {mostrarNuevo}
        </div>
    );
}

export default Productos;