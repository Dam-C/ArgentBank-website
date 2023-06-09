import { AccountTransacs } from "../0_elementsIndex/elementsIndex.jsx";
import { PropTypes } from "prop-types";

const Account = (props) => {
  return (
    <section className="account">
      <div className="account-head-wrapper">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.accountName}</h3>
          <p className="account-amount">$ {props.currentBalance}</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </div>
      <AccountTransacs />
    </section>
  );
};

export default Account;
