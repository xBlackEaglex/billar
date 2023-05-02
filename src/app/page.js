import Container from "./components/Container"
import Header from "./components/Header"
import styles from "../styles/main.module.css"
import { UseNumMezaProvider } from "./providers/numMezaContext"
import { UseProductosProvider } from './providers/productosContext';

export default function App() {
  return (
    <div className={styles.main}>
      <UseProductosProvider>
        <UseNumMezaProvider>
          <Header />
          <Container />
        </UseNumMezaProvider>
      </UseProductosProvider>
    </div>
  )
}
