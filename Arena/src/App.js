import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Games from './pages/Games/Games';

function App() {
  return <>
    <Header />
    <Home />
    <About />
    <Games />
    <Contact />
    <Footer />
  </>
}

export default App;
