import { CheckAuth, Account } from "../0_elementsIndex/elementsIndex.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserPage = () => {
  CheckAuth();
  const dispatch = useDispatch();
  const [userNameAccount, setUserNameAcount] = useState("");
  const actualToken = useSelector((state) => state.user.userToken);
  const bearerToken = `Bearer ${actualToken}`;

  /*

  const getUserName = async () => {
    const BACKEND_URL = "http://localhost:3001/api/v1";

    const userAuth = `Bearer ${localStorage.getItem("userToken")}`;

    const getUserInfos = await fetch(`${BACKEND_URL}/user/profile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: userAuth,
      },
    });

    const userDataAPI = await getUserInfos.json();
    // console.log(userDataAPI);
    const userNameApi = await userDataAPI.body.firstName;
    setUserNameAcount(userNameApi);
  };

  getUserName();
  
  */
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="header-greeting">
          Welcome back
          <br />
          {userNameAccount} !
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
      <Account />
    </main>
  );
};

export default UserPage;
