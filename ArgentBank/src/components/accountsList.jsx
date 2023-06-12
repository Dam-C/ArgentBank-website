import { AccountItem } from "../0_elementsIndex/elementsIndex";
import { useSelector } from "react-redux";

const AccountsList = () => {
  const userAccountsToDisplay = useSelector((state) => state.user.userAccounts);

  console.log(userAccountsToDisplay);
  return (
    <section>
      <h2 className="sr-only">Accounts</h2>
      {userAccountsToDisplay.map((acc) => {
        return (
          <div key={acc.accountID}>
            <AccountItem account={acc} />
          </div>
        );
      })}
    </section>
  );
};

export default AccountsList;
