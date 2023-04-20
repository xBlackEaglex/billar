import styles from '../../styles/Nuevo.module.css'
import Image from 'next/image'
import { useSetMezaBillar, useSetMezaDomino, useSetMostrar } from "../providers/numMezaContext";

const Nuevo = () => {
    const setBillar = useSetMezaBillar()
    const setDomino = useSetMezaDomino()
    const mostrar = useSetMostrar()

    return ( 
        <div className={styles.container}>
            <button onClick={() => {setBillar(); mostrar()}}><Image className={styles.image} src={'/billar.png'} alt='billar' width={130} height={130} priority /></button>
            <button onClick={() => {setDomino(); mostrar()}}><Image className={styles.image} src={'/domino.png'} alt='billar' width={130} height={130} priority /></button>
        </div>
    );
}

export default Nuevo;