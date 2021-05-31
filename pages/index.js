import { useState } from 'react';
import PlayerHeader from '../components/PlayerHeader';
import PlayerCard from '../components/PlayerCard';
import Grid from '@material-ui/core/Grid';
import AddPlayerForm from '../components/AddPlayerForm';

export default function Home({ players, setPlayers }) {
  const [removePlayer, setRemovePlayer] = useState(false);
  const [addPlayer, setAddPlayer] = useState(false);
  const [minPlayers, setMinPlayers] = useState(false);

  const remove = () => {
    if(players.length <= 1) {
      setMinPlayers(true);
      setRemovePlayer(false);
      return;
    }
    setMinPlayers(false);
    setAddPlayer(false);
    setRemovePlayer(!removePlayer);
  }
  const add = () => {
    setRemovePlayer(false);
    setAddPlayer(!addPlayer);
  }
  const handleDelete = (e) => {
    const newPlayers = players.filter(player => player.id != e.currentTarget.value);
    setPlayers(newPlayers);
    setRemovePlayer(false);
  }
  
  return (
    <div>
      <PlayerHeader remove={remove} add={add} />
      {addPlayer ? <AddPlayerForm players={players} setPlayers={setPlayers} setAddPlayer={setAddPlayer}/> : null}
      {removePlayer ? 
        minPlayers ? <h1>hi</h1> :
        <div style={{maxWidth: '500px', margin: 'auto'}}>
          {players.length > 0 && 
            <Grid 
              container 
            >
              {players.map(player => (
                <Grid 
                  item 
                  key={player.id} 
                  xs={6} 
                  md={6} 
                  lg={4}
                >
                  <PlayerCard player={player} removePlayer={removePlayer} handleDelete={handleDelete}/>
                </Grid>
              ))}
            </Grid>       
          }      
        </div>
      : 
        <div style={{maxWidth: '500px', margin: 'auto'}}>
          {players.length > 0 && 
            <Grid 
              container 
            >
              {players.map(player => (
                <Grid 
                  item 
                  key={player.id} 
                  xs={6} 
                  md={6} 
                  lg={4}
                >
                  <PlayerCard player={player} removePlayer={removePlayer}/>
                </Grid>
              ))}
            </Grid>       
          }
        </div>
      } 
    </div>
  )
}
