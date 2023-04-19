"use client"

import Image from "next/image";
import styles from "../../styles/Header.module.css"
import Nuevo from "./Nuevo";
import { useState } from "react";

const Header = () => {

    const [MostrarBoton, setMostrarBoton] = useState(false)

    return (
        <div className={styles.container}>
            <p>Billar</p>
            <button onClick={() => setMostrarBoton(!MostrarBoton)} className={styles.mas}>
                <Image src={'/mas.png'} alt="mas" fill sizes="50px, 50px" quality={100} />
            </button>
            {MostrarBoton ? <Nuevo /> : null}
        </div>

    );
}

export default Header;