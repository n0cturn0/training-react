import styles from './Frase.module.css';
function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>O importante não é vencer todos os dias, mas lutar sempre.</p>
            <p className={styles.fraseContent}>Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!</p>
        </div>
    );
}
export default Frase;