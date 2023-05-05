"use client";

import Meza from "./Meza";
import { useMezaBillar, useMezaDomino } from "../providers/numMezaContext";
import styles from "../../styles/Container.module.css"
import { useState, useEffect } from "react";

const Container = () => {
    let numMezaB = useMezaBillar();
    let numMezaD = useMezaDomino();

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



    const MBillar = Array.from(Array(numMezaB).keys());
    const MDomino = Array.from(Array(numMezaD).keys());

    return (
        <div className={styles.container}>
            {MBillar.map((billar, index) => (
                <Meza dataPrecios={dataPrecios} dataTime={dataTime} key={index} meza={billar + 1} img={'/billar.png'} nombre={'Pool'} id={1} />
            ))}
            {MDomino.map((domino, index) => (
                <Meza dataPrecios={dataPrecios} dataTime={dataTime} key={index} meza={domino + 1} img={'/domino.png'} nombre={'Domino'} id={2} />
            ))}
        </div>
    );
};

export default Container;
