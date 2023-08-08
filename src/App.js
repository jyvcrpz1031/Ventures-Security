import { Navigation, ScrollToTop } from './components/core';
import { Announcement } from './components/page';
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
      <Announcement />
    </div>
  );
}

export default App;
