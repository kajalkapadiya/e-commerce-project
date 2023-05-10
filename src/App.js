import "./App.css";
import MainHeader from "./Components/pages/MainHeader";
import Cart from "./Components/Cart/Cart";
import { useEffect, useState } from "react";
import NavbarData from "./Components/pages/Navbar";
import google from "./google.png";
import spotify from "./spotify.png";
import fb from "./fb.png";
import axios from "axios";

const test = async () => {
  const mailId = localStorage.getItem("token");
  const emailId = mailId.replace("@", "").replace(".", "");

  const result = await axios.get(
    `https://crudcrud.com/api/9ab2030143de4ebb8621f1405ab40ee6/${emailId}`
  );
  console.log(result.data);
  if (!result.data.length) {
    const data = await axios.post(
      `https://crudcrud.com/api/9ab2030143de4ebb8621f1405ab40ee6/${emailId}`,
      {}
    );
    console.log(data.data);
    localStorage.setItem("_id", data.data._id);
  }
};

function App() {
  useEffect(() => {
    test();
  }, []);

  const [cart, setCart] = useState(false);
  const showCartHandler = () => {
    setCart(true);
  };

  const closeCartHandler = () => {
    setCart(false);
  };

  return (
    <>
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
              <a href="https://www.google.co.in/">
                <img src={google} style={{ width: "30px" }} alt="google" />{" "}
              </a>
            </li>
            <li style={{ padding: "10px", margin: "0px 20px" }}>
              <a href="https://open.spotify.com/?">
                <img src={spotify} style={{ width: "30px" }} alt="spotify" />
              </a>
            </li>
            <li style={{ padding: "10px", margin: "0px 20px" }}>
              <a href="https://www.facebook.com/">
                <img src={fb} style={{ width: "30px" }} alt="fb" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
