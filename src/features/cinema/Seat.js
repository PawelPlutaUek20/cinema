import { useDispatch, useSelector } from "react-redux";

import { select, unselect, getReservation } from './cinemaSlice';

import styles from './Reservation.module.css'

const Seat = (props) => {

    const dispatch = useDispatch()
    const reservation = useSelector(getReservation)

    return (
        <div
            className={`${styles.space} ${props.seat ? styles.seat : ''} ${props.seat && props.seat.reserved ? styles.reserved : props.seat && reservation.seatsSelected.some(seat => seat.id === props.seat.id) ? styles.selected : ''}`}
            onClick={() => {
                if (props.seat && !props.seat.reserved){
                    if (reservation.seatsSelected.some(seat => seat.id === props.seat.id)) dispatch(unselect(props.seat))
                    else if (!reservation.seatsSelected.some(seat => seat.id === props.seat.id)) dispatch(select(props.seat)) 
                }
            }}
        />

        
    )
}

export default Seat