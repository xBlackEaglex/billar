import styles from '../../styles/NuevoProducto.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NuevoProducto = (props) => {
    const dataPrecios1 = props.dataPrecios

    const [data, setData] = useState(dataPrecios1);
    const [nuevoPrecio, setNuevoPrecio] = useState(0);
    const [regresar, setRegresar] = useState(false)
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
            setData(dataPrecios1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [regresar]);

    const handleNameButton = (name) => {
        props.handleConsumo(name);
    };

    const agregarProducto = () => {
        const ultimoProducto = data[data.length - 1];

        const nuevoProducto = {
            ...ultimoProducto,
            producto: `$${nuevoPrecio}`,
            precio: Number(nuevoPrecio),
        };

        setData([...data.slice(0, data.length - 1), nuevoProducto]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerProducts} >
                        {data.map((img) => (
                            <button
                                onClick={() => {
                                    handleNameButton(img);
                                    setRegresar(!regresar);
                                    props.handleMostrar();
                                    setMostrar(true);
                                }}
                                key={img.id}
                                className={styles.button}
                            >
                                <Image src={img.img} alt={img.producto} width={85} height={85} priority quality={100} />
                            </button>
                        ))}
            </div>
            <div className={styles.agregar}> 
                {mostrar 
                    ?
                        <>
                            <input className={styles.input} type="number" value={nuevoPrecio} onChange={(e) => setNuevoPrecio(e.target.value)} />
                            <button onClick={()=>{agregarProducto(); setMostrar(false)}}>Agregar</button>
                        </>
                    : null
                }
            </div>
        </div>
    );
}

export default NuevoProducto;