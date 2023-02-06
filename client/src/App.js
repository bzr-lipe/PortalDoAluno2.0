
import './App.css';
import { MenuMobile } from './components/menuMobile/MenuMobile';
import Navbar from './components/navbar/index.js';

function App() {
  return (
    <div className="App" >
        <Navbar />
        <MenuMobile/>
    </div>
  )
}

export default App;
