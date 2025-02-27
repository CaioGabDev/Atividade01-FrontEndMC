import styles from "../styles/Card.module.css"

export default function Card( {title}) {   
    return (
        <div className={styles.block}>
            <h1> {title} </h1>
            </div>
    )
}
