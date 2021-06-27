import { useSelector } from 'react-redux';
import { getReservation } from './cinemaSlice';

import { Container } from 'react-bootstrap';

export function Summary() {

    const reservation = useSelector(getReservation);


    return(
        <Container className="ml-4">

            <h3 className="font-weight-bold mt-4">Twoja rezerwacja przebiegła pomyślnie!</h3>

            <p className="mt-4">Wybrałeś miejsca:</p>

            <ul>
                {reservation.seatsSelected.map(seat => {
                    return <li key={seat.id}>rząd {seat.cords.x}, miejsce {seat.cords.y} ({seat.id})</li>
                })}
            </ul>

            <p className="font-weight-bold mt-5">Dziękujemy! W razie problemów prosimy o kontakt z dziełem administracji.</p>
        </Container>
    )
}
