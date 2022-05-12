import { Navigation } from './components/core';
import { Terms } from './components/page';
import RenderPages from './route';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RenderPages />
      <Terms />
    </div>
  );
}

export default App;
