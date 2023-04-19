import styles from '../../styles/Nuevo.module.css'
import Image from 'next/image'

const Nuevo = () => {
    return ( 
        <div className={styles.container}>
            <button><Image src={'/billar.png'} alt='billar' fill sizes='130px, 130px' priority /></button>
            <button><Image src={'/domino.png'} alt='billar' fill sizes='130px, 130px' priority /></button>
        </div>
    );
}

export default Nuevo;