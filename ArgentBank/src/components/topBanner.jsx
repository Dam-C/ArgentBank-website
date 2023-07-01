import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import abLogo from "../assets/argentBankLogo.png";
import { userLogOut } from "../reduxStore/userSlice";

const TopBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);
  const currentUser = useSelector((state) => state.user.userName);

  const handleLogOut = async () => {
    dispatch(userLogOut());
    isUserLoggedIn === false && navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={abLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {isUserLoggedIn === false ? (
        <>
          <Link to="/login-page">
            <p className="main-nav-item" href="./sign-in.html">
              <i className="fa fa-user-circle"></i>
              Sign In
            </p>
          </Link>
        </>
      ) : (
        <div>
          <Link to="/user-page">
            <p className="main-nav-item">{currentUser}</p>
          </Link>
          <Link to="/">
            <p className="main-nav-item" onClick={handleLogOut}>
              Logout
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopBanner;
