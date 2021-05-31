import styled from 'styled-components';

const ScoreCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: var(--brown, brown);
  color: var(--peach);
  font-size: 2rem;
  height: 100px;
  /* width: 100vw; */
  /* position: absolute;
  left: 0; */
`;

const PlayerScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--offWhite, white);
  border-right: 1px solid var(--offWhite, white);
  flex: 1;
  text-shadow: var(--ts);

  span {
    font-size: 3rem;
  }
`;

const GameHeader = ({ players }) => {
  return ( 
    <ScoreCard>
      {players.length > 0 &&
        (players.map(player => (
          <PlayerScore key={player.id}>{player.name[0].toUpperCase()}<span>{player.level}</span></PlayerScore>
        )))
      } 
    </ScoreCard>
  );
}
 
export default GameHeader;