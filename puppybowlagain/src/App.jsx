import './App.css'
import { getPlayer, getPlayers, deletePlayer, createPlayer } from './api'
import { useState, useEffect} from 'react';
import { Player } from './components/Player';
import { PlayerDetails} from './components/PlayerDetails';


function App() {
  const [players,setPlayers] = useState([]);
  const [player,setPlayer] = useState({});
  const [filter,setFilter] = useState("");
 
  // this happens whenever the app is loaded
  useEffect(() => {
    getPlayers().then(setPlayers);
  }, [])

  // this happens for when something is clicked only
function handlePlayerClick(playerId){
  getPlayer(playerId).then(setPlayer);
}

function handlePlayerDelete(playerId){
  deletePlayer(playerId).then(() => {
    getPlayers().then(players => {
      setPlayers(players);
    })
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const newPlayer = Object.fromEntries(formData.entries());
  createPlayer(newPlayer).then(() => {
    getPlayers().then(players => {
      setPlayers(players);
    });
  });
}

function handleFilter(evt){
  setFilter(evt.target.value);
}

  return (
    <div onClick= {() => setPlayer({})}>
      <h1> It's The Puppy Bowl!!! </h1>
      <dialog open= {player.id} > {player.name} </dialog>
      <PlayerDetails player = {player} />
      <form onSubmit= {handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input type= "text" name="name" />
        <label htmlFor="breed"> Breed: </label>
        <input type= "text" name="breed" />
        <button type="submit"> Add Player </button>

      </form>
      <input type="text" name="filter" value = {filter} onChange = {handleFilter}/>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Breed </th>
            <th> Player Details </th>
          </tr>
        </thead>
        <tbody>
          {players.filter(player => player.name.toLowerCase().includes(filter.toLowerCase()))
          .map((player) => {
            return (
              <Player 
              key ={player.id} 
              player={player} 
              onClick={handlePlayerClick}
              onDelete = {handlePlayerDelete} />
            );
          })}
        </tbody>
      </table>
        // {/* not fully sure how dialog works but its cool */}
    </div>
  );
}
export default App
