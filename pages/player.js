import GameHeader from "../components/GameHeader";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components';
import { useEffect, useState } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  width: 100%;
  max-width: 500px;
  margin: auto;

  h1 {
    font-size: 3vmax; 
  }
  `;

const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  
  h3 {
    margin: 0;
    color: White;
    letter-spacing: 0.75rem;
    text-shadow: var(--ts);
  }

  p {
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    font-size: 4rem;
    color: var(--brown, black);
    
    button {
      background: transparent;
      border: none;
      
      svg {
        font-size: 4rem;
      }
    }
  }
  `;

const StyledControls = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      box-shadow: var(--bs);
      background: var(--brown);
      border: none;
      color: var(--offWhite);
      font-family: inherit;
      font-size: 2rem;
      padding: 0.5rem 1rem;
    }
`;


const Player = ({ players, setPlayers, currentPlayer, setCurrentPlayer }) => {
  const [level, setLevel] = useState(currentPlayer.level);
  const [equipment, setEquipment] = useState(currentPlayer.equipment);
  const [mod, setMod] = useState(currentPlayer.mod);
  const [strength, setStrength] = useState(level + equipment + mod);
  let [current, setCurrent] = useState(players.indexOf(currentPlayer));
  const [yeah, setYeah] = useState(null);
  const [boo, setBoo] = useState(null);

  useEffect(() => {
    setYeah(new Audio('/audio/wooHoo.mp3'));
    setBoo(new Audio('/audio/boing.mp3'));
  }, []);

  useEffect(() => { 
    setStrength(level + equipment + mod);
    setCurrent(players.indexOf(currentPlayer));
  });

  const changePlayer = () => {
    setLevel(currentPlayer.level);
    setEquipment(currentPlayer.equipment);
    setMod(currentPlayer.mod);
    setStrength(currentPlayer.strength);
  }

  const handlePrev = () => {
    if (current === 0) {
      current = players.length - 1;
    } else {
      current--;
    }
    setCurrentPlayer(players[current]);
    changePlayer();
  }

  const handleNext = () => {
    if (current >= players.length - 1) {
      current = 0;
    } else { 
      current++; 
    }

    setCurrentPlayer(players[current]);
    changePlayer();
  }

  const handleAdd = (whatAddingTo) => {
    if (whatAddingTo === "level") {
      setLevel(level + 1);
    } else if (whatAddingTo === "equipment") {
      setEquipment(equipment + 1);
    } else if (whatAddingTo === "mod") {
      setMod(mod + 1);
    } else { return; }

    yeah.play();

    let updatePlayers = players;
    updatePlayers[current][whatAddingTo] = currentPlayer[whatAddingTo] + 1;
    setPlayers(updatePlayers);
  }

  const handleSubtract = (whatSubtractFrom) => {
    console.log(whatSubtractFrom);
    if (whatSubtractFrom === "level") {
      setLevel(level - 1);
    } else if (whatSubtractFrom === "equipment") {
      setEquipment(equipment - 1);
    } else if (whatSubtractFrom === "mod") {
      setMod(mod - 1);
    } else { return; }

    boo.play();

    let updatePlayers = players;
    updatePlayers[current][whatSubtractFrom] = currentPlayer[whatSubtractFrom] - 1;
    setPlayers(updatePlayers);
  }

  return ( 
    <div>
      <GameHeader players={players}/>
      <StyledDiv>
        <h1>{currentPlayer.name}</h1>
        <StyledWrapper>
          <h3>Level</h3>
          <p>
            <button onClick={() => handleSubtract('level')}><KeyboardArrowDownIcon /></button>
            {level}
            <button onClick={() => handleAdd('level')}><KeyboardArrowUpIcon /></button>
          </p>
        </StyledWrapper>
        <StyledWrapper>
          <h3>Equipment</h3>
          <p>
            <button onClick={() => handleSubtract('equipment')}><KeyboardArrowDownIcon /></button>
            {equipment}
            <button onClick={() => handleAdd('equipment')}><KeyboardArrowUpIcon /></button>
          </p>
        </StyledWrapper>
        <StyledWrapper>
          <h3>Modifier</h3>
          <p>
            <button onClick={() => handleSubtract('mod')}><KeyboardArrowDownIcon /></button>
            {mod}
            <button onClick={() => handleAdd('mod')}><KeyboardArrowUpIcon /></button>
          </p>
        </StyledWrapper>
        <StyledWrapper>
          <h3>Total Strength:</h3>
          <p>{strength}</p>
        </StyledWrapper>
        <StyledControls>
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </StyledControls>
      </StyledDiv>
    </div>
  );
}
 
export default Player;