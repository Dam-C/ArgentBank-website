import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SendToUserPage = async () => {
  const navigate = useNavigate();

  useSelector((state) => state.user.loggedIn) === true
    ? navigate("/user-page")
    : alert("identifiants incorrects");
};

export default SendToUserPage;
