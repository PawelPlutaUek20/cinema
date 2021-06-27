import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Reservation } from './features/cinema/Reservation';
import { ReservationForm } from './features/cinema/ReservationForm';
import { Summary } from './features/cinema/Summary';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/reservation">
        <Reservation />
      </Route>
      <Route path="/summary">
        <Summary />
      </Route>
      <Route path="/">
        <ReservationForm />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
