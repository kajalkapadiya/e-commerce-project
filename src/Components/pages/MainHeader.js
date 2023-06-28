import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MainNavigation from "../auth/MainNavigation";
import CartSpan from "../Cart/CartSpan";

const MainHeader = (props) => {
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
            <CartSpan onShowCart={props.onShowCart} />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default MainHeader;
