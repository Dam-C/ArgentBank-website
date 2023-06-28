import {
  AccountsList,
  EditNameForm,
} from "../0_elementsIndex/elementsIndex.jsx";

import { useDispatch, useSelector } from "react-redux";
import { getUserInfos } from "../reduxStore/userSlice";
import { useEffect } from "react";
import { useState, useRef } from "react";

const UserPage = () => {
  const dispatch = useDispatch();

  const actualToken = useSelector((state) => state.user.userToken);
  const bearerToken = `Bearer ${actualToken}`;

  const [displayEditUsername, setDisplayUsername] = useState(false);
  const parentRef = useRef();
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
        <button
          className="edit-button"
          onClick={() => setDisplayUsername(!displayEditUsername)}
        >
          Edit Name
        </button>
        <div
          className="collapse__content-container"
          ref={parentRef}
          style={
            displayEditUsername
              ? {
                  height: parentRef.current.scrollHeight + "px",
                }
              : {
                  height: "0px",
                }
          }
        >
          <EditNameForm />
        </div>
      </div>
      <AccountsList />
    </main>
  );
};

export default UserPage;
