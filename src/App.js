import { Navigation} from './components';
import RenderPages from './route';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RenderPages />
    </div>
  );
}

export default App;
