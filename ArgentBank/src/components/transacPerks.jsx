import { useState } from "react";

const TransacPerks = () => {
  // va gérer l'envoi du formulaire pour la modification des infos de la transaction

  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form className="transac-perks">
      <label htmlFor="transac-type">Transaction type</label>
      <span>Electronic</span>

      <label htmlFor="transac-category">Category</label>
      <select
        type="text"
        id="transac-category"
        name="transac-category"
        value={formData.transacCategory}
        onChange={handleChange}
      >
        <option value="" defaultValue={""}>
          {" "}
        </option>
        <option value="Food">Food</option>
        <option value="Clothes">Clothes</option>
        <option value="Serviec">Service</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="transac-note">Note</label>
      <textarea
        className="transac-note"
        type="text"
        id="transac-note"
        name="transac-note"
        value={formData.transacNote}
        onChange={handleChange}
        rows="1"
        cols="30"
        placeholder="30 char max"
        maxLength="30"
      ></textarea>
    </form>
  );
};

export default TransacPerks;
