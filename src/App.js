import './App.css';
import Navbar from './components/navbar';
import BarcodeScanner from './components/BarcodeScanner'

function App() {
  return (
    <div className="App">
      <Navbar />

      <BarcodeScanner />
    </div>
  );
}

export default App;
