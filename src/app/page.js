import Container from "./components/Container"
import Header from "./components/Header"
import styles from "../styles/main.module.css"

export default function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Container />
    </div>
  )
}
