"use client";

import React, { useState } from "react";
import styles from "../../styles/LapsoTiempo.module.css"
import Image from "next/image";

const LapsoTiempo = () => {
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

        return (
            <div className={styles.container}>
                <Image src={'/billar.png'} alt="billar" width={250} height={250} priority quality={100} />
                <div className={styles.tiempo}>
                    <h1>Meza 1</h1>
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
                </div>
            </div>
        );
};

export default LapsoTiempo;