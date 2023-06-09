import { callsAPI } from "../0_elementsIndex/constIndex";

const CheckAuth = async () => {
  const userAuth = `Bearer ${localStorage.getItem("userToken")}`;

  const getUserData = await fetch(`${callsAPI}/user/profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: userAuth,
    },
  });

  //getUserInfos.ok === true ? alert("données réccupérées") : alert("failure");
};

export default CheckAuth;
