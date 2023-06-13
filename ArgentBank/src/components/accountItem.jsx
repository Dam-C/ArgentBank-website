import { AccountTransacs } from "../0_elementsIndex/elementsIndex.jsx";
import { PropTypes } from "prop-types";
// import { useSelector } from "react-redux";

const AccountItem = (props) => {
  const { account } = props;

  return (
    <section
      className="account"
      id={account.accountID === "undefined" ? "" : account.accountId}
    >
      <div className="account-head-wrapper">
        <div className="account-content-wrapper">
          <h3 className="account-title">
            {account.accountName === undefined ? "NOPE" : account?.accountName}
          </h3>
          <p className="account-amount">
            $ {account === undefined ? "NOPE" : Number(account?.currentBalance)}
          </p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
      <aside className="transactions">
        <div className="transacs-titles">
          <span className="transacs-title transacs-title__date">Date</span>
          <span className="transacs-title transacs-title__desc">
            Description
          </span>
          <span className="transacs-title transacs-title__amount">Amount</span>
          <span className="transacs-title transacs-title__balance">
            Balance
          </span>
        </div>
        {account.transactions.map((transaction) => {
          return (
            <div key={transaction.transactionID}>
              <AccountTransacs />
            </div>
          );
        })}
      </aside>
    </section>
  );
};

AccountItem.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountItem;
