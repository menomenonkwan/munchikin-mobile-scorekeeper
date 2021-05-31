import { PlayCircleFilledRounded } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledDiv = styled.div`
  background: rgba(0,0,0,0.85);
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledForm = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%) translateY(-75%);
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1.25rem;
  font-family: inherit;
  margin: 1rem;
`;


const AddPlayerForm = ({ players, setPlayers, setAddPlayer }) => {
  const [newPlayer, setNewPlayer] = useState({});
  const [playerId, setPlayerId] = useState(null);
  
  useEffect(() => {
    setPlayerId(uuidv4());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newPlayer);
    if(!newPlayer.id) { return; }

    setPlayers([ ...players, newPlayer ]);
    setAddPlayer(false);
  }
 
  const handleChange = (e) => {
    setNewPlayer({
      id: playerId,
      name: e.target.value || '???',
      level: 1,
      equipment: 0,
      mod: 0
    });
  }
  
  return ( 
    <StyledDiv>
      {players.length >= 6 
        ? 
          <h1
            style={{ 
              color: 'var(--offWhite)',
              margin: '100px auto',
              width: '90%',
              textAlign: 'center'
            }}
          >Max Player Limit reached</h1>
        : 
          <StyledForm onSubmit={handleSubmit} onChange={handleChange} >
            <h1>Add Player</h1>
            <StyledInput type="text" name="name" />
            <StyledInput type="submit"></StyledInput>
          </StyledForm>
      }
    </StyledDiv>
  );
}
 
export default AddPlayerForm;