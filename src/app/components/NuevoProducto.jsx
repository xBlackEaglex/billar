import styles from '../../styles/NuevoProducto.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NuevoProducto = (props) => {
    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [nuevoPrecio, setNuevoPrecio] = useState(0);
    const [regresar, setRegresar] = useState(false)
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
        async function getData() {
            const response = await fetch("http://localhost:3010/precios");
            const dataApi = await response.json();
            setData(dataApi);
            setCargando(!cargando);
        }
        getData();
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
                {cargando ? null : (
                    <>
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
                                <Image src={img.img} alt={img.producto} width={90} height={90} priority quality={100} />
                            </button>
                        ))}
                    </>
                )}
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