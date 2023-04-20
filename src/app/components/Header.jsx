"use client"

import Image from "next/image";
import styles from "../../styles/Header.module.css"
import Nuevo from "./Nuevo";
import { useMostrar, useSetMostrar } from "../providers/numMezaContext";

const Header = () => {
    const mostrar = useMostrar()
    const setMostrar = useSetMostrar()

    return (
        <div className={styles.container}>
            <p>Billar</p>
            <button onClick={setMostrar} className={styles.mas}>
                <Image className={styles.image} src={'/mas.png'} alt="mas" width={50} height={50} quality={100} />
            </button>
            {mostrar ? <Nuevo /> : null}
        </div>

    );
}

export default Header;