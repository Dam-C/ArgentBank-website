import {
  /*CheckAuth,*/ AccountsList,
} from "../0_elementsIndex/elementsIndex.jsx";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos } from "../reduxStore/userSlice";
import { useEffect } from "react";

const UserPage = () => {
  const dispatch = useDispatch();
  const actualToken = useSelector((state) => state.user.userToken);
  const bearerToken = `Bearer ${actualToken}`;

  useEffect(() => {
    dispatch(getUserInfos(bearerToken));
  }, [dispatch, bearerToken]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="header-greeting">
          Welcome back
          <br />
          {useSelector((state) => state.user.userFirstName)} !
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <AccountsList />
    </main>
  );
};

export default UserPage;
