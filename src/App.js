import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightsList from './components/FlightsList';
import FlightDetail from './components/FlightDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Flight Status Board</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FlightsList />} />
          <Route path="/flights/:id" element={<FlightDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;