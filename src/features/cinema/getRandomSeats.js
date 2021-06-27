const getRandomSeats = (seatsNumber, seatsNext, seats, randomSeats = []) => {

  const availableSeats = seats.filter(seat => !seat.reserved)

  if (seatsNumber > availableSeats.length || seatsNumber <= 0) return []

  if (seatsNext) {
    for (let i = 0; i < availableSeats[availableSeats.length - 1].cords.x + 1; i++){
      let rows = availableSeats.filter(e => e.cords.x === i)
      for (let j = 0; j < rows.length - seatsNumber + 1; j++){
        let temp = rows.slice(j, seatsNumber+j)
        if (temp[seatsNumber-1].cords.y - temp[0].cords.y === seatsNumber - 1){
          randomSeats.push(temp)
        }
      }
    }

    randomSeats = randomSeats[Math.floor(Math.random() * randomSeats.length)] ? randomSeats[Math.floor(Math.random() * randomSeats.length)] : []
  } 

  else if (!seatsNext) {
    let set = new Set()

    while ([...set].length < seatsNumber) {
      set.add(availableSeats[Math.floor(Math.random() * availableSeats.length)])
    }

    randomSeats = [...set]
  } 

  return randomSeats
}

export default getRandomSeats
