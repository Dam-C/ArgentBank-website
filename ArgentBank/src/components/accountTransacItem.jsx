import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const AccountTransacItem = (props) => {
  const { transactionInfos } = props;
  console.log(transactionInfos);
  return (
    <article
      id={
        transactionInfos?.transactionID === "undefined"
          ? ""
          : props?.transactionInfos.transactionID
      }
    >
      <div className="transaction">
        <div className="transaction-infos">
          <span className="transac-info transac-info__date">
            {transactionInfos?.date}
          </span>
          <span className="transac-info transac-info__desc">
            {props.transactionInfos.description}
          </span>
          <span className="transac-info transac-info__amount">
            $ {props.transactionInfos.amount}
          </span>
          <span className="transac-info transac-info__balance">$4890.00</span>
          <Link to="/user-edit-transac">
            <button className="btn edit-transac-btn">Edit transaction</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

AccountTransacItem.propTypes = {
  transactionInfos: PropTypes.object.isRequired,
};

export default AccountTransacItem;
