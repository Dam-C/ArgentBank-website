import { Link } from "react-router-dom";
import abLogo from "../assets/argentBankLogo.png";

const TopBanner = () => {
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
      <Link to="/login-page">
        <p className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </p>
      </Link>
      <p>Logout</p>
    </nav>
  );
};

export default TopBanner;
