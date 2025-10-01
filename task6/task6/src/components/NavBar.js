import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleLang } from "../redux/mystore";

function NavBar() {
  const { lang, content } = useSelector((state) => state.mylang);
  const dispatch = useDispatch();

  const changeLang = () => {
    dispatch(toggleLang());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {content.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {content.about}
              </Link>
            </li>
   
            <li className="nav-item">
              <button className="btn btn-danger nav-link" onClick={changeLang}>
                {lang.toUpperCase()}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
