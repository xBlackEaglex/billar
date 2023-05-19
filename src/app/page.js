"use client";

import Container from "./components/Container";
import Header from "./components/Header";
import styles from "../styles/main.module.css";
import { UseNumMesaProvider } from "./providers/numMesaContext";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App() {
  
    var bPreguntar = true;

    window.onbeforeunload = preguntarAntesDeSalir;

    function preguntarAntesDeSalir() {
        if (bPreguntar) return "¿Seguro que quieres salir?";
    }

    return (
        <div className={styles.main}>
            <UseNumMesaProvider>
                <Header />
                <Container />
            </UseNumMesaProvider>
        </div>
    );
}
