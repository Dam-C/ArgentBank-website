import { CheckAuth, Account } from "../0_elementsIndex/elementsIndex.jsx";
import { useState } from "react";

const UserPage = () => {
  CheckAuth();

  const [userNameAccount, setUserNameAcount] = useState("");

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
    const userNameApi = await userDataAPI.body.firstName;
    setUserNameAcount(userNameApi);
  };

  getUserName();

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userNameAccount}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
};

export default UserPage;
