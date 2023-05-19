"use client";

import Container from "./components/Container";
import Header from "./components/Header";
import styles from "../styles/main.module.css";
import { UseNumMesaProvider } from "./providers/numMesaContext";

export default function App() {

    if (typeof window !== "undefined") {
        var bPreguntar = true;

        window.onbeforeunload = preguntarAntesDeSalir;

        function preguntarAntesDeSalir() {
            if (bPreguntar) return "¿Seguro que quieres salir?";
        }
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
