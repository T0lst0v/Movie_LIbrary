import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

// import { Link } from "react-router-dom";

const API_URL = "/db/user/register/";

function Register() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //TODO: Email verification
    //TODO: PAssword verification
    //TODO: Guest login from registration page
    let newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(newUser);

    // let respond = await fetch(API_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // });
    // respond = await respond.json();
    // if (respond.userCreated) {
    //   //REFACTOR: auto login after registration
    //   navigate("/dashboard");
    // } else {
    //   //REFACTOR: send toasts with server messages
    // }
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
              <input type="text" className="auth-form-input" id="name" name="name" placeholder="Enter Your name" />
            </div>

            <div className="auth-field">
              <label htmlFor="name">email</label>
              <input type="email" className="auth-form-input" id="email" name="email" placeholder="Enter Your email" />
            </div>

            <div className="auth-field">
              <label htmlFor="name">password</label>
              <input type="password" className="auth-form-input" id="password" name="password" placeholder="Password" />
            </div>

            <div className="auth-field">
              <label htmlFor="name">confirm password</label>
              <input type="password" className="auth-form-input" id="password2" name="password2" placeholder="Confirm password" />
            </div>

            <div className="auth-btn-container">
              <button type="button" className="btn" onClick={toLogin}>
                Login
              </button>

              <button type="button" className="btn ">
                Guest
              </button>
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
<video
  class="jw-video jw-reset"
  tabindex="-1"
  disableremoteplayback=""
  webkit-playsinline=""
  playsinline=""
  preload="metadata"
  src="https://imdb-video.media-imdb.com/vi362988313/1434659607842-pgv4ql-1632111701604.mp4?Expires=1652811058&amp;Signature=ORpJGxDLYScjCvb3SowGtWUN-zD-JxKKNcCkuD9I08DmW20vYWf15jvHqurqL6eW6R9xJFiVnspFrwgOVQkDWzilNaxI~CGeuu0dhSrV2JKfABoWI~eUVp5yV2Um0NH4yHItvcj5-S2CJyaqTLE~2DNVM6emniOElMfixDu8ixrLJCQMTIy8j7PTMkFhJeBpcxT5Sm~BfPhfU9WOMUhnY76-Z~TDVt41NefWjmGM0c~493~~~qOBtXdvfRQLLB1QQfVo24Km6w93HWbsxVA3BvWxiL8STZoDxmGUBVtIG15bD3FuL~~GnXy3stFpGT16f6ZCYcUWp~LUuyhx0Gdk5g__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
  style="object-fit: fill;"
></video>;
