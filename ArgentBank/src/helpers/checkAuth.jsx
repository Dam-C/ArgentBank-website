const CheckAuth = async () => {
  const BACKEND_URL = "http://localhost:3001/api/v1";

  const userAuth = `Bearer ${localStorage.getItem("userToken")}`;

  const getUserInfos = await fetch(`${BACKEND_URL}/user/profile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: userAuth,
    },
  });

  //getUserInfos.ok === true ? alert("données réccupérées") : alert("failure");
};

export default CheckAuth;
