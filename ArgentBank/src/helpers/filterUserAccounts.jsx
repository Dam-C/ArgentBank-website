import { useSelector } from "react-redux";

const filterUserAccounts = async () => {
  useSelector((state) => state.user.userAccounts);
};

export default filterUserAccounts;
