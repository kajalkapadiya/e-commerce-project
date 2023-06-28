import { useContext } from "react";
import AuthContext from "./AuthContext";
import Nav from "react-bootstrap/Nav";
import CartContext from "../../storeRoom/CartContext";

const MainNavigation = () => {
  const atuhCntx = useContext(AuthContext);
  const cartCntx = useContext(CartContext);

  const isLoggedIn = atuhCntx.isLoggedIn;

  const logoutHandler = () => {
    atuhCntx.logout();
    cartCntx.clearCart();
  };

  return (
    <header>
      <nav>
        {isLoggedIn && (
          <li>
            <Nav.Link href="/authprofile">profile</Nav.Link>
          </li>
        )}
        {isLoggedIn && (
          <div
            className="position-fixed"
            style={{ right: "7rem", top: "0.5rem" }}
          >
            <button
              className="btn btn-outline-secondary"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
export default MainNavigation;
