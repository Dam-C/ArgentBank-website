import { useState } from "react";

const TransacsPerks = () => {
  // va gérer l'envoi du formulaire pour la modification des infos de la transaction

  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // const BACKEND_URL = "http://localhost:3001/api/v1";

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const loginIDS = {
  //     email: formData.username,
  //     password: formData.password,
  //   };
  //   //console.log(loginIDS);
  //   const response = await fetch(`${BACKEND_URL}/user/login`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(loginIDS),
  //   });

  //   const token = await response.json();

  //   if (response.ok === true) {
  //     alert("Connexion réussie");

  //     localStorage.setItem("userToken", token.body.token);
  //     //console.log(localStorage.userToken)
  //     // window.location.href = "../index.html";
  //   } else {
  //     alert(`Erreur dans l’identifiant ou le mot de passe`);
  //   }
  // };

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
        <option value="" selected>
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

export default TransacsPerks;
