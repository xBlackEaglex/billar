"use client";

import Meza from "./Meza";
import { useMezaBillar, useMezaDomino } from "../providers/numMezaContext";
import styles from "../../styles/Container.module.css"

const Container = () => {
    let numMezaB = useMezaBillar();
    let numMezaD = useMezaDomino();

    const MBillar = Array.from(Array(numMezaB).keys());
    const MDomino = Array.from(Array(numMezaD).keys());

    return (
        <div className={styles.container}>
            {MBillar.map((billar, index) => (
                <Meza key={index} meza={billar + 1} img={'/billar.png'} nombre={'Pool'} id={1} />
            ))}
            {MDomino.map((domino, index) => (
                <Meza key={index} meza={domino + 1} img={'/domino.png'} nombre={'Domino'} id={2} />
            ))}
        </div>
    );
};

export default Container;
