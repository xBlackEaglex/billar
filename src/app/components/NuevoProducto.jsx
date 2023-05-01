import styles from '../../styles/NuevoProducto.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NuevoProducto = () => {
    const [data, setData] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        async function getData(){
            const response = await fetch('http://localhost:3010/precios')
            const dataApi =  await response.json()
            setData(dataApi)
            setCargando(!cargando)
        }
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            {cargando 
                ? null 
                : data.map(img => (
                    <button key={img.id} className={styles.button}>
                        <Image src={img.img} alt={img.producto} width={150} height={150} priority quality={100} />
                    </button>
                ))
            }
        </div>
    );
}

export default NuevoProducto;