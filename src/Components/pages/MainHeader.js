import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MainNavigation from "../auth/MainNavigation";
import CartContext from "../../storeRoom/CartContext";

const MainHeader = (props) => {
  const cartCntx = useContext(CartContext);
  const totalItem = cartCntx.item.length;

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/AuthForm">Login</Nav.Link>
            <Nav.Link href="/navigator">Navigator</Nav.Link>
            <MainNavigation />
            <div
              className="position-fixed"
              style={{ right: "2rem", top: "0.5rem" }}
            >
              <button className="btn btn-primary" onClick={props.onShowCart}>
                <span>Cart</span>
                <span>{totalItem}</span>
              </button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default MainHeader;
