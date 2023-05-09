"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/Mesa.module.css"
import Image from "next/image";
import Productos from "./Productos";

const LapsoTiempo = ({mesa, img, nombre, id, dataPrecios, dataTime}) => {
    const dataPrecios1 = dataPrecios;
    const data = dataTime;

    const [fechaActual, setFechaActual] = useState(new Date());
    const [diferenciaMinutos, setDiferenciaMinutos] = useState(null);
    const [total, setTotal] = useState(0);
    const [individual, setIndividual] = useState([])
    const [numeroPersonas, setNumeroPersonas] = useState(1);
    const [mostrarElemento, setMostrarElemento] = useState(true)

    let costeTiempo = 0

        const tiempo = data.find(producto => producto.id === id)
        costeTiempo = tiempo.precio

    const calcularTiempo = () => diferenciaMinutos!==null ? costeTiempo * diferenciaMinutos : 0

    // Función para obtener la fecha actual
    const obtenerFechaActual = () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea iniciar un nuevo tiempo?");
        if (confirmDelete) {
            setFechaActual(new Date());
        }
    };

    // Función para calcular la diferencia en minutos
    const calcularDiferenciaMinutos = () => {
        const fechaActual2 = new Date();
        const diferencia = Math.floor((fechaActual2 - fechaActual) / (1000 * 60));
        setDiferenciaMinutos(diferencia);
    };


    const handleIndividual = (totalPersona, elemento) => {
        setIndividual(individualPrevio => {
            const arrayNuevo = [...individualPrevio]; // hacemos una copia del estado anterior
            arrayNuevo[elemento] = totalPersona; // modificamos el elemento correspondiente
            return arrayNuevo; // devolvemos el nuevo estado
        });
    };

    const sum = () => individual.reduce((a,b) => a + b, 0)

    useEffect(() => {
        setTotal(sum() + calcularTiempo())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[individual, diferenciaMinutos])

    const borrarUltimoElemento = () => {
        setIndividual(prevIndividual => prevIndividual.slice(0, prevIndividual.length - 1));
    }

    const calcularCostoPorPersona = () => calcularTiempo() / numeroPersonas;

    const handleMostrarElemento = () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea eliminar la mesa?");
        if (confirmDelete) {
            setMostrarElemento(!mostrarElemento)
        }
    }

    return (
            <div style={!mostrarElemento ? {display: 'none'} : {}} className={styles.container}>
                <div className={styles.containerTiempo}>
                    <Image className={styles.image} src={img} alt={nombre} width={512} height={512} priority quality={100} />
                    <div className={styles.tiempo}>
                        <h1>{`${nombre} ${mesa}`}</h1>
                        <div className={styles.datos}>
                            <button onClick={obtenerFechaActual}> Iniciar </button>
                            <p>Inicio: {`
                            ${fechaActual.getHours() < 10 ? "0" + fechaActual.getHours() : fechaActual.getHours()}:${fechaActual.getMinutes() < 10 ? "0" + fechaActual.getMinutes() : fechaActual.getMinutes()}
                            `}</p>
                        </div>
                        <div className={styles.datos}>
                            <button onClick={() => {calcularDiferenciaMinutos()}}> Terminar </button>
                            <p>Tiempo Jugado: {diferenciaMinutos !== null ? diferenciaMinutos : "N/A"} min</p>
                        </div>
                        <div className={styles.total}>
                            <div className={styles.individual}>
                                <p>Total Tiempo: ${calcularTiempo().toFixed(1)} entre: </p>
                                <input type="number" value={numeroPersonas} onChange={(e) => setNumeroPersonas(Number(e.target.value))} />
                                <p>{numeroPersonas > 1 ? 'personas' : 'persona'}</p>
                            </div>
                            {numeroPersonas > 1 ? <p>Costo por persona: ${calcularCostoPorPersona().toFixed(1)}</p> : null}
                            <p>Total: ${total.toFixed(1)} </p>
                        </div>
                    </div>
                    <div className={styles.divBorrar}>
                        <button className={styles.buttonEliminar} onClick={() => {handleMostrarElemento()}}><Image className={styles.imageEliminar} src={'/eliminar.png'} alt="eliminar" width={100} height={100} quality={100} /></button>
                    </div>
                </div>
                <Productos dataPrecios={dataPrecios1} handle={handleIndividual} handleBorrar={borrarUltimoElemento} />
            </div>
    );
};

export default LapsoTiempo;