import Dice from 'react-dice-roll';
import GameHeader from "../components/GameHeader";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100%;
`;

const DiceRoll = ({players}) => {

  return ( 
    <>
      <GameHeader players={players}/>
      <StyledDiv>
        <Dice
          size={150} 
          sound={'/audio/rollingDice.mp3'}
        />
      </StyledDiv>
    </>
   );
}
 
export default DiceRoll;