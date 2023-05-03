"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/Meza.module.css"
import Image from "next/image";
import Productos from "./Productos";

const LapsoTiempo = ({meza, img, nombre}) => {
        const [fechaActual, setFechaActual] = useState(new Date());
        const [diferenciaMinutos, setDiferenciaMinutos] = useState(null);
        const [total, setTotal] = useState(0);
        const [individual, setIndividual] = useState([])

        // Función para obtener la fecha actual
        const obtenerFechaActual = () => {
            setFechaActual(new Date());
        };

        // Función para calcular la diferencia en minutos
        const calcularDiferenciaMinutos = () => {
            const fechaActual2 = new Date();
            const diferencia = Math.floor((fechaActual2 - fechaActual) / (1000 * 60));
            setDiferenciaMinutos(diferencia);
        };

        const handleIndividual = (totalPersona, elemento) => {
            setIndividual(individual[elemento] = totalPersona)
            console.log(individual);
            console.log(elemento);
            console.log(totalPersona);
        }

        // const sum = () => {
        //     individual.reduce((a,b) => a + b, 0)
        // }

        // useEffect(() => {
        //     setTotal(sum)
        // // eslint-disable-next-line react-hooks/exhaustive-deps
        // },[individual])


        return (
                <div className={styles.container}>
                    <div className={styles.containerTiempo}>
                        <Image className={styles.image} src={img} alt={nombre} width={512} height={512} priority quality={100} />
                        <div className={styles.tiempo}>
                            <h1>{`${nombre} ${meza}`}</h1>
                            <div className={styles.datos}>
                                <button onClick={obtenerFechaActual}> Iniciar </button>
                                <p>Inicio: {`
                                ${fechaActual.getHours() < 10 ? "0" + fechaActual.getHours() : fechaActual.getHours()}:${fechaActual.getMinutes() < 10 ? "0" + fechaActual.getMinutes() : fechaActual.getMinutes()}
                                `}</p>
                            </div>
                            <div className={styles.datos}>
                                <button onClick={calcularDiferenciaMinutos}> Terminar </button>
                                <p>Tiempo Jugado: {diferenciaMinutos !== null ? diferenciaMinutos : "N/A"} min</p>
                            </div>
                            <div className={styles.total}>
                                <p>Total: {total} </p>
                            </div>
                        </div>
                    </div>
                    <Productos handle={handleIndividual} />
                </div>
        );
};

export default LapsoTiempo;