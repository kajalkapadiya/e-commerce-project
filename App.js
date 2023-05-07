import "./App.css";
import MainHeader from "./Components/pages/MainHeader";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./storeRoom/CartContextProvider";
import { useState } from "react";
import NavbarData from "./Components/pages/Navbar";
import google from "./google.png";
import spotify from "./spotify.png";
import fb from "./fb.png";

function App() {
  const [cart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const closeCartHandler = () => {
    setCart(false);
  };

  return (
    <>
      <CartContextProvider>
        {cart && <Cart onClose={closeCartHandler} />}
        <MainHeader onShowCart={showCartHandler} />
        <div>
          <h1
            className="text-center p-3"
            style={{
              padding: "40px",
              paddingTop: "40px",
              paddingRight: "40px",
              paddingBottom: "40px",
              paddingLeft: "40px",
              fontSize: "100px",
              background: "gray",
              color: "white",
            }}
          >
            The Generics
          </h1>
        </div>
        <NavbarData />
      </CartContextProvider>
      <footer
        style={{
          display: "flex",
          marginTop: "40px",
          padding: "20px",
          background: "#56CCF2",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "black",
            width: "50%",
            fontSize: "50px",
            fontWeight: "bold",
            margin: "0 auto",
          }}
        >
          The Generics
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <ul style={{ listStyleType: "none", display: "flex" }}>
            <li style={{ padding: "10px", margin: "0px 20px" }}>
              <a href="https://www.google.co.in/" />
              <img src={google} style={{ width: "30px" }} />
            </li>
            <li style={{ padding: "10px", margin: "0px 20px" }}>
              <a href="https://open.spotify.com/?" />
              <img src={spotify} style={{ width: "30px" }} />
            </li>
            <li style={{ padding: "10px", margin: "0px 20px" }}>
              <a href="https://www.facebook.com/" />
              <img src={fb} style={{ width: "30px" }} />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
