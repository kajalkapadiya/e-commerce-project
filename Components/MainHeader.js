import { Link } from "react-router-dom";
// import classes from "./MainHeader.module.css";

const MainHeader = () => {
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
            <Link to="/navigator">Navigator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
