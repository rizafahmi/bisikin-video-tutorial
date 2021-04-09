import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ currentUser, setCurrentUser }) {
  function handleLogout(event) {
    Cookies.remove("token");
    setCurrentUser(null);
  }
  return (
    <div className="header-container">
      <header className="header">
        <Link to="/">
          <h1>BISIK.IN</h1>
        </Link>
      </header>
      <div className="right-header">
        {currentUser !== null ? (
          <button onClick={handleLogout} type="button" className="button-login">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button type="button" className="button-login">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="button-register">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
