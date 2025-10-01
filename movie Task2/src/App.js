import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetails from "./pages/MovieDetails";
import { LangContext } from "./context/LangContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("en-US"); // add language state here

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    // wrap the app with LangContext.Provider
    <LangContext.Provider value={{ language, setLanguage }}>
      <Router>
        <AppNavbar onSearch={handleSearch} />
        <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    </LangContext.Provider>
  );
}

export default App;
