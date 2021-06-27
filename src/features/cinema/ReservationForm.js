import { Button, Col, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { makeReservation, getReservation } from './cinemaSlice';

import { useHistory } from 'react-router';
import { useState } from 'react';

export function ReservationForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const reservation = useSelector(getReservation);


    const [seatsNumber, setSeatsNumber] = useState(reservation.seatsNumber);
    const [seatsNext, setSeatsNext] = useState(reservation.seatsNext);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(makeReservation({ seatsNumber, seatsNext }))
        history.push('/reservation')
    }

    return (
        <Container className={`d-flex vh-100 justify-content-center align-items-center`}>
            <Form onSubmit={onSubmit}>
                <Form.Group as={Form.Row} controlId="formSeatsNumber">
                    <Form.Label column>
                        Liczba miejsc:
                    </Form.Label>
                    <Col>
                        <Form.Control 
                            type="number" 
                            value={seatsNumber}
                            onChange={e => setSeatsNumber(parseInt(e.target.value))} 
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        label="Czy miejsca mają być obok siebie?"
                        checked={seatsNext}
                        onChange={e => setSeatsNext(e.target.checked)}
                    />
                </Form.Group>
                <Button block type="submit" className="rounded-0" variant="outline-dark" style={{height: '50px'}}>Wybierz miejsca</Button>
            </Form>
        </Container>
    )
    
}