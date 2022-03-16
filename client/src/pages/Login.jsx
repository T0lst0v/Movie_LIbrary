import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/Register");
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <div className="auth-plate">
        <section className="auth-heading">
          <IconContext.Provider value={{ className: "myReact-icons" }}>
            <>
              <FaGithub />
              <h1>Movie Library</h1>
              <ImInfo />
            </>
          </IconContext.Provider>
        </section>
        <section>
          <form onSubmit={onSubmit} className="auth-form">
            <div className="auth-field">
              <label htmlFor="name">email</label>
              <input type="email" className="auth-form-input" id="email" name="email" value={email} placeholder="Enter Your email" onChange={onChange} />
            </div>
            <div className="auth-field">
              <label htmlFor="name">password</label>
              <input type="password" className="auth-form-input" id="password" name="password" value={password} placeholder="Password" onChange={onChange} />
            </div>

            <div className="auth-btn-container">
              <button className="btn" onClick={toRegister}>
                Register
              </button>
              <button className="btn btn-focus">Guest</button>
              <button type="submit" className="btn ">
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
