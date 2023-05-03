import Container from "./components/Container"
import Header from "./components/Header"
import styles from "../styles/main.module.css"
import { UseNumMezaProvider } from "./providers/numMezaContext"

export default function App() {
  return (
    <div className={styles.main}>
      <UseNumMezaProvider>
        <Header />
        <Container />
      </UseNumMezaProvider>
    </div>
  )
}
