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

const fillCinema = (seats, x, y) => {
  let cinemaArr = Array.from(Array(x), () => new Array(y).fill(null))

  seats.forEach(seat => {
    cinemaArr[seat.cords.x][seat.cords.y] = seat
  })

  return cinemaArr
}

export function Reservation() {

  const dispatch = useDispatch()
  const history = useHistory();
  const reservation = useSelector(getReservation);

  const [seats, setSeats] = useState([])
  const [cinema, setCinema] = useState([])
  const [cinemaSize, setCinemaSize] = useState({x: 0, y: 0})

  useEffect(() => {

    fetchSeats().then((apiSeats) => {
      const maxX = Math.max( ...apiSeats.map(e=> e.cords.x)) + 1;
      const maxY = Math.max( ...apiSeats.map(e=> e.cords.y)) + 1;
      setCinemaSize({
        x: maxX,
        y: maxY
      })
      setSeats(apiSeats)
      setCinema(fillCinema(apiSeats, maxX, maxY))
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
      <div style={{display: 'grid', gridTemplateColumns: `repeat(${cinemaSize.y}, min(5vh, 5vw))`, gap:'min(1vh, 1vw)'}}>
        {cinema.map((rows, i) =>
          rows.map((seat, j) => 
            <Seat key={`s${i}${j}`} seat={seat}/>
          )
        )}
      </div>
      <div className={'d-flex vw-100 mt-5 justify-content-center align-items-center'}>
        <div className={'d-flex align-items-center'}>
          <SeatInfo name="Miejsca Dost??pne" type=""/>
          <SeatInfo name="Miejsca zarezerwowane" type="reserved" />
          <SeatInfo name="Tw??j wyb??r" type="selected" />
        </div>
        <Button className="rounded-0" variant="outline-dark" onClick={() => reserve()} style={{fontSize: 'min(1.75vw, 1.75vh)', minWidth: 'min(20vw, 20vh)', minHeight: 'min(5vw, 5vh)'}}>Rezerwuj</Button>
      </div>
    </Container>
  );
}
