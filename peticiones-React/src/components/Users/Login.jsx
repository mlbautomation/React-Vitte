import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setLoading(false);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((e) => {
        setLoading(false);
        console.table(e);
        setError(e.response.data.error);
      });
  };

  if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Start session</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={loading ? "loading..." : "Login"}
            className="link"
          />
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
    </div>
  );
};

export default Login;
