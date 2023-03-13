import List from './List';
import './App.css';
import { useState } from 'react';
import data from "./data"

function App() {
  const [person, setPerson] = useState(data)
  return (
    <div className='App'>
      <section className="container">
        <h3>{person.length} birthdays today</h3>
        <List person={person} />
        <button onClick={() => setPerson([])}>clear all birthday</button>
      </section>
      
    </div>
  );
}

export default App;
