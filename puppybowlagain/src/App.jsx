import './App.css'
import { getPlayer, getPlayers } from './api'
import { useState, useEffect} from 'react';


function App() {
  const [players,setPlayers] = useState([]);
  const [player,setPlayer] = useState({});
 
  // this happens whenever the app is loaded
  useEffect(() => {
    getPlayers().then(setPlayers);
  }, [])

  // this happens for when something is clicked only
function handlePlayerClick(playerId){
  getPlayer(playerId).then(setPlayer);
}

  return (
    <>
      <h1> It's The Puppy Bowl!!!</h1>
      {/* no to sure if this error thing will work test after */}
        {players.length === 0 ? (
          <p> No Puppies Are Shown. </p>
        ) : (
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Breed </th>
            <th> Status </th>
            <th> Player Details </th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => {
            return (
              <tr key = {player.id}>
                <td>{player.name}</td>
                <td>{player.breed}</td>
                <td>{player.status}</td>
                <td>
                   <button onClick={() => handlePlayerClick(player.id)}> View Player </button> 
                </td>                
              </tr>
            );
          })}
        </tbody>
      </table>
        )}
        {/* not fully sure how dialog works but its cool */}
        <dialog open= {player.id}> {player.name} </dialog>
    </>
  );
}
export default App
