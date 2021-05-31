import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [players, setPlayers] = useState([
    { id: 1, name: 'player 1', level: 1, equipment: 0, mod: 0 },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Layout>
      <Component 
        {...pageProps} 
        players={players} 
        setPlayers={setPlayers}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
    </Layout>
  );
}

export default MyApp
