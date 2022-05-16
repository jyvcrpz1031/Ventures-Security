import { Navigation, ScrollToTop } from './components/core';
import { Terms } from './components/page';
import RenderPages from './route';
import React from 'react';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div className="App">
      <Navigation />
      <RenderPages />
      <ScrollToTop />
      <Terms />
    </div>
  );
}

export default App;
