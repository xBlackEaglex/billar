import Container from "./components/Container"
import Header from "./components/Header"
import styles from "../styles/main.module.css"
import { UseNumMesaProvider } from "./providers/numMesaContext"

export default function App() {
  return (
    <div className={styles.main}>
      <UseNumMesaProvider>
        <Header />
        <Container />
      </UseNumMesaProvider>
    </div>
  )
}
