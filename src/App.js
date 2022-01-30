import logo from './logo.svg';
import './App.css';
import {Navigation, Header, Cards} from './components/index'
// import { Navbar } from './components/Navigation/Navbar';
// import { Header } from './components/Header/Header';
// import { Cards } from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Cards/>
    </div>
  );
}

export default App;
