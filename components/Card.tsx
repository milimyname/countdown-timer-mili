import styles from '../styles/Card.module.css';

const Card = ({time, type}: {time: number, type: string})=>{
    return (
        <div className={styles.cardBox}>
            <div className={styles.card}>
              <h1 className={styles.cardTitle}>{time}</h1>
              <div className={styles.cardPattern}>
                <div className={styles.cardLeftDot}></div>
                <div className={styles.cardSeperator}></div>
                <div className={styles.cardRightDot}></div>
              </div>
            </div>
            <p>{type}</p>
        </div>
    );
}

export default Card;