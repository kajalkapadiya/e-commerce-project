import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MainNavigation from "../auth/MainNavigation";

const MainHeader = (props) => {
  // const cartCnt = useContext(CartContext);
  // const totalItem = cartCnt.item.length;
  const [totalItem, setTotalItem] = useState();
  useEffect(() => {
    loadItem();
  }, []);

  const mailId = localStorage.getItem("token");
  let emailId;
  if (mailId) {
    emailId = mailId.replace("@", "").replace(".", "");
  }

  const loadItem = async () => {
    let numberOfItem = 0;

    const result = await axios.get(
      `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}`
    );
    result.data.map((quant) => {
      numberOfItem += Number(quant.quantity);
      console.log(numberOfItem);
      setTotalItem(numberOfItem);
    });
  };

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
