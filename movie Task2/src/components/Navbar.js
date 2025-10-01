import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { language, setLanguage } = useContext(LangContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold fs-4" to="/">
        Movies App
      </Link>

      <div>
        <select
          className="form-select bg-dark text-light"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ width: "150px" }}
        >
          <option value="en-US">English</option>
          <option value="ar-EG">العربية</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
