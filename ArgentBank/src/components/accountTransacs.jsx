import { TransacsPerks } from "../0_elementsIndex/elementsIndex.jsx";

const AccountTransacs = () => {
  /* 
Va recevoir un tableau d'objets avec les props :
    - date = date
    - description = str
    - montant = int
    - balance = int
    - type = str
    - category = str
    - note = str

générer une ligne collapsible pour chaque transaction

va aussi envoyer les données saisis par l'utilisateur pour categoriser les transacctions


*/

  return (
    <aside className="transactions">
      <div className="transacs-titles">
        <span className="transacs-title transacs-title__date">Date</span>
        <span className="transacs-title transacs-title__desc">Description</span>
        <span className="transacs-title transacs-title__amount">Amount</span>
        <span className="transacs-title transacs-title__balance">Balance</span>
      </div>

      <div className="transaction">
        <div className="transaction-infos">
          <span className="transac-info transac-info__date">08/06/2024</span>
          <span className="transac-info transac-info__desc">
            Golden Sun Bakery
          </span>
          <span className="transac-info transac-info__amount">$9.00</span>
          <span className="transac-info transac-info__balance">$4890.00</span>
          <span className="transac-collapse">v</span>
        </div>

        <TransacsPerks />
      </div>
    </aside>
  );
};

export default AccountTransacs;
