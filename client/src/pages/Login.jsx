import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { connect } from "react-redux";

const API_URL = "/db/user/login/";

function Login(props) {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const navigate = useNavigate();
  const toRegister = () => {
    navigate("/Register");
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const guestLogin = () => {
    setUser({
      email: "email@email.com",
      password: "password",
    });
    onSubmit();
  };

  const onSubmit = async (e) => {
    console.log("submit");
    if (e) {
      e.preventDefault();
    }
    let response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    response = await response.json();
    if (response.auth) {
      //save token and user name to local storage
      localStorage.setItem("jwt", response.token);
      localStorage.setItem("user", response.user.name);

      //update Redux global state
      props.onLogin(response.user.name);

      //REFACTOR: auto login after registration
      navigate("/dashboard");
    } else {
      //REFACTOR: send toasts with server messages
    }
    console.log(response);
  };

  return (
    <div className="auth-container">
      <div className="auth-plate">
        <section className="auth-heading">
          <IconContext.Provider value={{ className: "myReact-icons" }}>
            <>
              <a href="https://github.com/T0lst0v/Movie_LIbrary" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
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
              <button onClick={guestLogin} className="btn btn-focus">
                Guest
              </button>

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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch({ type: "ON_AUTH", payload: user }),
  };
};
export default connect(null, mapDispatchToProps)(Login);
