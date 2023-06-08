import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const BACKEND_URL = "http://localhost:3001/api/v1";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginIDS = {
      email: formData.username,
      password: formData.password,
    };
    const response = await fetch(`${BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginIDS),
    });

    const token = await response.json();

    if (response.ok === true) {
      alert("Connexion réussie");
      localStorage.setItem("userToken", token.body.token);

      /* 
      
      insérer ici une action pour envoyer l'ensemble des infos de l'utilisateur au store redux

      */
      navigate("/user-page");
    } else {
      alert(`Erreur dans l’identifiant ou le mot de passe`);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
