import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Assistant from './Assistant';
import AgriSchemes from './AgriSchemes';
import HealthSchemes from './HealthSchemes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Notice the fix on the line below! */}
        <Route path="/assistant/:domain" element={<Assistant />} />
        <Route path="/schemes/agriculture" element={<AgriSchemes />} />
        <Route path="/schemes/health" element={<HealthSchemes />} />
      </Routes>
    </Router>
  );
}

export default App;