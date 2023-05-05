"use client";

import Mesa from "./Mesa";
import { useMesaBillar, useMesaDomino } from "../providers/numMesaContext";
import styles from "../../styles/Container.module.css"
import { useState, useEffect } from "react";

const Container = () => {
    let numMesaB = useMesaBillar();
    let numMesaD = useMesaDomino();

    const [dataTime, setDataTime] = useState([])
    const [dataPrecios, setDataPrecios] = useState([]);



    useEffect(() => {
        async function getData(){
            const response = await fetch('https://long-outerwear-duck.cyclic.app/tiempos')
            const dataApi =  await response.json()
            setDataTime(dataApi)
        }
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://long-outerwear-duck.cyclic.app/precios");
            const dataApi = await response.json();
            setDataPrecios(dataApi);
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const MBillar = Array.from(Array(numMesaB).keys());
    const MDomino = Array.from(Array(numMesaD).keys());

    return (
        <div className={styles.container}>
            {MBillar.map((billar, index) => (
                <Mesa dataPrecios={dataPrecios} dataTime={dataTime} key={index} mesa={billar + 1} img={'/billar.png'} nombre={'Pool'} id={1} />
            ))}
            {MDomino.map((domino, index) => (
                <Mesa dataPrecios={dataPrecios} dataTime={dataTime} key={index} mesa={domino + 1} img={'/domino.png'} nombre={'Domino'} id={2} />
            ))}
        </div>
    );
};

export default Container;
