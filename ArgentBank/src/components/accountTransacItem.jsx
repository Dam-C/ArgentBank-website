import { TransacsPerks } from "../0_elementsIndex/elementsIndex.jsx";
import { PropTypes } from "prop-types";

const AccountTransacItem = (props) => {
  const { transactionInfos } = props;

  return (
    <article
      id={
        props.transactionInfos.transactionID === "undefined"
          ? ""
          : props?.transactionInfos.transactionID
      }
    >
      <div className="transaction">
        <div className="transaction-infos">
          <span className="transac-info transac-info__date">
            {props.transactionInfos.date}
          </span>
          <span className="transac-info transac-info__desc">
            {props.transactionInfos.description}
          </span>
          <span className="transac-info transac-info__amount">
            ${props.transactionInfos.amount}
          </span>
          <span className="transac-info transac-info__balance">$4890.00</span>
          <span className="transac-collapse">v</span>
        </div>

        <TransacsPerks />
      </div>
    </article>
  );
};

AccountTransacItem.propTypes = {
  transactionInfos: PropTypes.object.isRequired,
};

export default AccountTransacItem;
