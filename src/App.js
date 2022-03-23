import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Contact from './components/contact';
import Showcase from './components/showcase';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Showcase/>
      <Contact/>
    </div>
  );
}

export default App;
