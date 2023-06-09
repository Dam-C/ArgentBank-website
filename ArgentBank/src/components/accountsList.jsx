import { Account } from "../0_elementsIndex/elementsIndex";
import { useSelector } from "react-redux";

const AccountsList = () => {
  //   const accountsListDisplay = async () => {
  //     useSelector((state) => state.user.userAccounts);
  //   };
  //   console.log(accountsListDisplay);
  return (
    <section>
      <h2 className="sr-only">Accounts</h2>
      {useSelector((state) => state.user.userAccounts).map(
        ({ accountID, accountName, currentBalance, transactions }) => {
          return (
            <div key={accountID}>
              <Account
                accountName={accountName}
                currentBalance={currentBalance}
                transactions={transactions}
              />
            </div>
          );
        }
      )}
    </section>
  );
};

export default AccountsList;
