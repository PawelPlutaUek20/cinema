import Seat from './Seat'
import SeatInfo from './SeatInfo'
import { useHistory } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  select,
  getReservation,
} from './cinemaSlice';

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
      <div style={{display: 'grid', gridTemplateColumns: `repeat(15, 50px)`, gap: '10px'}}>
        {cinema.map((rows, i) =>
          rows.map((seat, j) => 
            <Seat key={`s${i}${j}`} seat={seat}/>
          )
        )}
      </div>
      <div className={'d-flex mt-5 justify-content-center align-items-center w-100'}>
        <SeatInfo name="Miejsca Dostępne" type=""/>
        <SeatInfo name="Miejsca zarezerwowane" type="reserved" />
        <SeatInfo name="Twój wybór" type="selected" />
        <Button className="rounded-0 h-100" variant="outline-dark" onClick={() => reserve()} style = {{width: '230px', marginLeft: '78px'}}>Rezerwuj</Button>
      </div>
    </Container>
  );
}
