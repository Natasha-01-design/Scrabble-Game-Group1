
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from "./pages/Game"
import Home from './pages/Home';
import WinnerPage from './pages/Winner';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<WinnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;