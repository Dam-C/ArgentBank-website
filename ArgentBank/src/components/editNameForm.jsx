import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chgUserName } from "../reduxStore/userSlice";

const EditNameForm = () => {
  const userIntels = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ userName: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserName = {
      userName: formData.userName,
    };
    dispatch(chgUserName(newUserName)).then((result) => {
      if (result.payload) {
        navigate("/user-page");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="chg-userName-form">
      <div className="input-wrapper">
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder={userIntels.userName}
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="chg-userName-firstName"
          name="chg-userName-firstName"
          placeholder={userIntels.userFirstName}
          readOnly
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="chg-userName-lastName"
          name="chg-userName-lastName"
          placeholder={userIntels.userLastName}
          readOnly
        />
      </div>
      <button className="btn send-userNameChg-btn" type="submit">
        Apply changes
      </button>
    </form>
  );
};

export default EditNameForm;
