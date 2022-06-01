import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

// import { Link } from "react-router-dom";

const API_URL = "/db/user/register/";

function Register() {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/");
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let respond = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    respond = await respond.json();
    if (respond.userCreated) {
      //REFACTOR: auto login after registration
      navigate("/dashboard");
    } else {
      //REFACTOR: send toasts with server messages
    }
    //TODO: PAssword verification
  };

  return (
    <div className="auth-container">
      <div className="auth-plate">
        <section className="auth-heading">
          {/* IconContext.Provider  passing class styles to the icons   */}
          <IconContext.Provider value={{ className: "auth-icons" }}>
            <>
              <a href="https://github.com/T0lst0v/Movie_LIbrary" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
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
