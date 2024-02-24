import { useState, useEffect } from 'react'
import { createPlayer } from './api'
// import { getPlayers } from './api'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect (() => {
    createPlayer({
      name: "Rufus",
      breed: "Irish Setter",
    }).then((newPlayer) => {
      console.log(newPlayer);
    });
  }, []);

  return (
    <>
    </>
  )
}
export default App
