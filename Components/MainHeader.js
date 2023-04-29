import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../Store/LoginContext";
// import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const LoginCntx = useContext(LoginContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
          {LoginCntx.isLoggedIn && (
            <li>
              <Link to="/products">LoginForm</Link>
            </li>
          )}
          <li>
            <Link to="/navigator">Navigator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
