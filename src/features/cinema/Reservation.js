import { useHistory } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { select, getReservation } from './cinemaSlice';

import Seat from './Seat'
import SeatInfo from './SeatInfo'
import getRandomSeats from './getRandomSeats';
import axios from 'axios';


const fetchSeats = () => {
  return axios
    .get("/cinema/db.json")
    .then((res) => {
      return res.data.seats
    })
    .catch((err) => {
      console.log(err)
    })
}

const fillCinema = (apiSeats) => {
  let cinema = Array.from(Array(10), () => new Array(15).fill(null))

  apiSeats.forEach(seat => {
    cinema[seat.cords.x][seat.cords.y] = seat
  })

  return cinema
}


export function Reservation() {

  const dispatch = useDispatch()
  const history = useHistory();
  const reservation = useSelector(getReservation);

  const [seats, setSeats] = useState([])
  const [cinema, setCinema] = useState([])
  
  useEffect(() => {
    fetchSeats().then((apiSeats) => {
      setSeats(apiSeats)
      setCinema(fillCinema(apiSeats))
    })
  }, [])

  useEffect(() => {
    if (!reservation.seatsSelected.length) {
      getRandomSeats(reservation.seatsNumber, reservation.seatsNext, seats).forEach(seat => dispatch(select(seat)))
    }
  }, [dispatch, seats, reservation])

  const reserve = () => {
    history.push('/summary')
  }

  return (
    <Container className={`d-flex flex-column vh-100 justify-content-center align-items-center`}>
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${15}, min(5vh, 5vw))`, gap: 'min(1vh, 1vw)'}}>
        {cinema.map((rows, i) =>
          rows.map((seat, j) => 
            <Seat key={`s${i}${j}`} seat={seat}/>
          )
        )}
      </div>
      <div className={'d-flex vw-100 mt-5 justify-content-center align-items-center'}>
        <div className={'d-flex align-items-center'}>
          <SeatInfo name="Miejsca Dostępne" type=""/>
          <SeatInfo name="Miejsca zarezerwowane" type="reserved" />
          <SeatInfo name="Twój wybór" type="selected" />
        </div>
        <Button className="rounded-0" variant="outline-dark" onClick={() => reserve()} style={{fontSize: 'min(1.75vw, 1.75vh)', minWidth: 'min(20vw, 20vh)', minHeight: 'min(5vw, 5vh)'}}>Rezerwuj</Button>
      </div>
    </Container>
  );
}
