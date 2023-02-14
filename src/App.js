import Header from './components/Header';
import './styles/Header.css';
import Footer from './components/Footer.js';
import './styles/Footer.css';
import DrumMachine from './components/DrumMachine.js';
import './styles/DrumMachine.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <DrumMachine />
      <Footer />
    </div>
  );
}

export default App;
