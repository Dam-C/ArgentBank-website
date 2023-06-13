import { AccountItem } from "../0_elementsIndex/elementsIndex";
import { useSelector } from "react-redux";

const AccountsList = () => {
  const userAccountsToDisplay = useSelector((state) => state.user.userAccounts);

  return (
    <section>
      <h2 className="accounts-header">Accounts</h2>
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
