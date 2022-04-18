import PlayerList from './component/PlayerList';
import PlayerContextProvider from './context/PlayerContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <PlayerContextProvider>
            <PlayerList />
          </PlayerContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
