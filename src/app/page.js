"use client"

import Container from "./components/Container"
import Header from "./components/Header"
import styles from "../styles/main.module.css"
import { UseNumMesaProvider } from "./providers/numMesaContext"
import { useEffect } from "react"

export default function App() {

  useEffect(() => {
    const disableBackButton = () => {
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener('popstate', disableBackButton);

    return () => {
      window.removeEventListener('popstate', disableBackButton);
    };
  }, []);

  return (
    <div className={styles.main}>
      <UseNumMesaProvider>
        <Header />
        <Container />
      </UseNumMesaProvider>
    </div>
  )
}
