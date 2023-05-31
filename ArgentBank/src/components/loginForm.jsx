import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const BACKEND_URL = "http://localhost:3001/api/v1";

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(`Name: ${formData.username}, Email: ${formData.password}`);
    const loginIDS = {
      email: formData.username,
      password: formData.password,
    };
    //console.log(loginIDS);
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
      localStorage.setItem("tokenID", token.token);
      // window.location.href = "../index.html";
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
