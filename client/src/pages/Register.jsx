import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/Login");
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
              <h1>register new user</h1>
              <ImInfo />
            </>
          </IconContext.Provider>
        </section>
        <section>
          <form onSubmit={onSubmit} className="auth-form">
            <div className="auth-field">
              <label htmlFor="name">name to display</label>
              <input type="text" className="auth-form-input" id="name" name="name" value={name} placeholder="Enter Your name" onChange={onChange} />
            </div>
            <div className="auth-field">
              <label htmlFor="name">email</label>
              <input type="email" className="auth-form-input" id="email" name="email" value={email} placeholder="Enter Your email" onChange={onChange} />
            </div>
            <div className="auth-field">
              <label htmlFor="name">password</label>
              <input type="password" className="auth-form-input" id="password" name="password" value={password} placeholder="Password" onChange={onChange} />
            </div>
            <div className="auth-field">
              <label htmlFor="name">confirm password</label>
              <input type="password" className="auth-form-input" id="password2" name="password2" value={password2} placeholder="Confirm password" onChange={onChange} />
            </div>
            <div className="auth-btn-container">
              <button className="btn" onClick={toLogin}>
                Login
              </button>
              <button className="btn ">Guest</button>
              <button type="submit" className="btn btn-focus">
                Register
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Register;
