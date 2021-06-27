import styles from './Reservation.module.css'

const SquareInfo = (props) => {
    return(
        <>
            <div className={`${styles.space} ${styles.seat} ${props.type && styles[props.type]} ${styles.info}`}/>

            <div className={styles.infoText}>{props.name}</div>
      </>
    )
}

export default SquareInfo