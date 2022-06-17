import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.container}>
      Welcome to property connect
      </div>
    </>
  )
}
