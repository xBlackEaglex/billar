import { useEffect, useState } from 'react';
import styles from '../../styles/NuevoUsuario.module.css'
import NuevoProducto from './NuevoProducto';
import Image from 'next/image';
import { useTotalIndividual, useSetTotalIndividual } from '../providers/productosContext';

const NuevoUsuario = (props) => {
    const elemento = props.numElemento

    const [mostrar, setMostrar] = useState(false)
    const [consumidos, setConsumidos] = useState([])
    const [totalPersona, setTotalPersona] = useState(0)

    const handleMostrar = () => {
        setMostrar(!mostrar)
    }

    const handleConsumidos = (producto) => {
        setConsumidos([...consumidos, producto.producto])
        setTotalPersona(totalPersona + producto.precio)
    }

    const setIndividual = useSetTotalIndividual()
    let individual = useTotalIndividual()

    useEffect(() => {
        setIndividual(individual[elemento]=totalPersona)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[totalPersona])


    console.log(individual);

    return (
        <div className={styles.container}>
            <div className={styles.productos}>
                <div className={styles.productoAndNombre}>
                    <input type="text" />
                    {consumidos.map((name,index) => <p className={styles.p} key={index}>{name}</p>)}
                </div>
                <div className={styles.containerButton}>
                    <p className={styles.total}>total: ${totalPersona} </p>
                    <button className={styles.button} onClick={() => handleMostrar()}><Image className={styles.image} src={'/mas.png'} alt="mas" width={30} height={30} quality={100} /></button>
                </div>
            </div>
            <div className={styles.nuevo}>
                {mostrar ? <NuevoProducto handleConsumo={handleConsumidos}/> : null}
            </div>
        </div>
    );
}

export default NuevoUsuario;