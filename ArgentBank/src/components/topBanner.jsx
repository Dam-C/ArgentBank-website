import { Link } from "react-router-dom";
import abLogo from "../assets/argentBankLogo.png";
import { useSelector } from "react-redux";

const TopBanner = () => {
  const testInProg = useSelector((state) => state.user);
  console.log(testInProg);
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
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </Link>
    </nav>
  );
};

export default TopBanner;
