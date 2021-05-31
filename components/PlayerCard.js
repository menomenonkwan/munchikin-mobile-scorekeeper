import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    background: '#CBA675',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    marginRight: '-16px',
    backgroundColor: 'var(--brown)',
    fontSize: '2rem',
    color: 'var(--offWhite, white)',
    textShadow: 'var(--ts)'
  },
  button: {
    borderRadius: '50px',
    backgroundColor: 'var(--brown, brown)',
    margin: '20px',
  },
  name: {
    color: 'var(--black, black)',
    textTransform: 'uppercase',
  },
  score: {
    margin: '1rem 0',
  }
}));


export default function PlayerCard({ player, removePlayer, handleDelete }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      {removePlayer 
        ? <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleDelete}
            value={player.id}
          ><DeleteForeverIcon 
            style={{fontSize: '2rem'}}
          /></Button>   
        : <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {player.name[0].toUpperCase()}
              </Avatar>
            }
          />
      }
      <CardContent style={{ padding: 0, wordBreak: 'break-word'}}>
        <Typography 
          variant="h4" 
          component="h4" 
          className={classes.name}
          >
          {player.name}
        </Typography>
        <Typography 
          variant="h5" 
          color="textSecondary" 
          component="h5"
          className={classes.score}
        >
          Level: {player.level}
        </Typography>
      </CardContent>
    </Card>
  );
}