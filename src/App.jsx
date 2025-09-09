import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BestRated from "./pages/BestRated";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="bg-pink-500 min-h-screen text-black">
        <header className="flex justify-between items-center p-4 bg-pink-600">
          <h1 className="font-bold text-xl">Movie Galaxy</h1>
          <nav className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/best-rated">Best Rated</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/best-rated" element={<BestRated />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
