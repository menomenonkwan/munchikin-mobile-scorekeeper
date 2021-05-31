import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: var(--brown);
  height: 100px;
  color: var(--peach);

  h1 {
    text-shadow: var(--ts);
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 'var(--black, black)',
    
    padding: '1.5rem',
    backgroundColor: '#42B5C7',
  },
}));

const PlayerHeader = ({ remove, add }) => {
  const classes = useStyles();

  return ( 
    <StyledHeader>
      <Button
        variant="contained"
        // color="primary"
        className={classes.button}
        startIcon={<PersonAddDisabledIcon />}
        onClick={remove}
      ></Button>      
      
      <h1>Players</h1>

      <Button
        variant="contained"
        // color="secondary"
        className={classes.button}
        startIcon={<PersonAddIcon />}
        onClick={add}
      ></Button>     
      
    </StyledHeader>
  );
}
 
export default PlayerHeader;