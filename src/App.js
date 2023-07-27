import Container from 'react-bootstrap/Container';
import Header from './components/header/Header';
import PlayerContainer from './components/playerContainer/PlayerContainer';

function App() {
  return (
    <div className="text-center mt-4" >
      <Container>

        <Header/>
        <PlayerContainer/>

      </Container>
    </div>
  );
}

export default App;
