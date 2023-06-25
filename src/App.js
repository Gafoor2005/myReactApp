// importing packages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importing global css
import "./App.css"

// importing pages
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
