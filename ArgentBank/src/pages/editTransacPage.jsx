import { TransacPerks } from "../0_elementsIndex/elementsIndex.jsx";

const EditTransacPage = () => {
  return (
    <main className="main bg-dark">
      <article className="edit-transac">
        <h3>About your transaction</h3>
        <p>
          Transaction ID :{" "}
          <span className="transac-id">ABOA-TS-2023-05-04</span>
        </p>
        <TransacPerks />
      </article>
    </main>
  );
};

export default EditTransacPage;
