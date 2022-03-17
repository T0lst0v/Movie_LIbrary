import { Navigate } from "react-router-dom";

function Protected(props) {
  const token = localStorage.getItem("jwt");
  console.log(token);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return props.children;
}

export default Protected;
