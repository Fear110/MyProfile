import Navbar from './components/Navbar/Navbar';
import './App.css';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Exprience from './components/Exprience/Exprience';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Exprience />
      <Works />
    </div>
  );
}

export default App;
