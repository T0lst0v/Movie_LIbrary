import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();
  useEffect(() => {
    //removing token and user name from local storage
    localStorage.removeItem("jwt");
    localStorage.removeItem("name");

    props.onLogOut();
    navigate("/");
  });
  return <div>Logout</div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch({ type: "ON_AUTH", payload: null }),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
