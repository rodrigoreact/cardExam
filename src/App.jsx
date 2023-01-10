import { useState } from 'react'
import users from './users.json';
import './App.css'

function App() {

  

  const random=Math.floor(Math.random()*users.length);

  const [counter, setCounter] = useState(random);

  let name=`${users[counter].name.title} ${users[counter].name.first} ${users[counter].name.last}`;
  let img = users[counter].picture.large;

  const changeUser=() => {
    setCounter(Math.floor(Math.random()*users.length));
  }

  return (
    <div className="App">
      <div className="hijo">
      <h1>{name}</h1>
      <img src={img} alt="imagen" />
      <ul>
        <li>
        <i className="fa-solid fa-square-envelope"></i>   
        {users[counter].email}     
        </li>

        <li>
          <i className="fa-solid fa-phone"></i>
          {users[counter].phone}
        </li>
        <li>
        <i className="fa-solid fa-location-dot"></i>
          {users[counter].location.country} {" "} 
          {users[counter].location.state} {" "} 
          {users[counter].location.city}
        </li>
      </ul>
   
      <button onClick={changeUser}><i className="fa-solid fa-shuffle"></i></button>
    </div>
    </div>
  );
};

export default App
