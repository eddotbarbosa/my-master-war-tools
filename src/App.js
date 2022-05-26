import {useEffect} from 'react';
import {logEvent} from 'firebase/analytics';
import {analytics} from './services/firebase/firebase';

import './styles/global.scss';
import layout from './styles/layout.module.scss';

import Home from './pages/home/home.js';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  /* useEffect(() => {
    logEvent(analytics, 'page_view');
  }, []); */

  return (
    <div className="App">
      < Navbar />
      <Home className={`${layout['mb-5']}`} />
      <Footer />
    </div>
  );
}

export default App;
