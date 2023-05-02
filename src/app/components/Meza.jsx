"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/Meza.module.css"
import Image from "next/image";
import Productos from "./Productos";
import { useTotal, useSetTotal, useTotalIndividual } from "../providers/productosContext";

const LapsoTiempo = ({meza, img, nombre}) => {
        const [fechaActual, setFechaActual] = useState(new Date());
        const [diferenciaMinutos, setDiferenciaMinutos] = useState(null);

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

        const setTotal = useSetTotal()
        let total = useTotal()
        const individual = useTotalIndividual()

        useEffect(() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setTotal(total = individual.reduce((a,b) => a + b, 0))
        },[total])

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
                    <Productos />
                </div>
        );
};

export default LapsoTiempo;