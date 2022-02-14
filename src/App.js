import './styles/global.scss';
import layout from './styles/layout.module.scss';

import Home from './pages/home/home.js';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Home className={`${layout['mb-5']}`} />
      <Footer />
    </div>
  );
}

export default App;
