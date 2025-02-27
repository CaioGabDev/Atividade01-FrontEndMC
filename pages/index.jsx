import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"

export default function Home() {
 return (
    <div className={styles.container}>
        <Header />
    <main className={styles.main}>
    <div className={styles.left}>
        <Card />
        <Card />
        <Card />
        </div>
        <aside className={styles.aside}>
            <div className={styles.woow}>
                <img src="https://www.dombosco.com.br/content/dam/region-growth/brazil/dom-bosco/images/noticias/dom-professor-otimizar%20tempo.jpeg" alt="woow" />
            </div>
        </aside>
        </main>
        <Footer />
</div>
 )
}