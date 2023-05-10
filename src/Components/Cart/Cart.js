import React, { useContext } from "react";
import CartContext from "../../storeRoom/CartContext";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const item = cartCntx.item;
  const totalAmount = cartCntx.totalAmount;

  return (
    <div
      style={{
        margin: "0px",
        display: "flex",
        position: "fixed",
        top: "50px",
        height: "95%",
        right: "0",
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(177, 103, 103)",
        minHeight: "50vh",
        overflow: "scroll",
      }}
    >
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>CART</h2>
      <div>
        {item.map((data) => {
          return (
            <div key={data.id}>
              {/* {console.log(data.id)} */}
              <div
                style={{
                  marginTop: "45px",
                }}
              >
                <span
                  style={{
                    alignItems: "center",
                    borderBottom: "1px solid black",
                    marginRight: "1.5em",
                    marginBottom: "10px",
                    marginTop: "10px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  ITEM
                </span>
                <div
                  style={{
                    boxSizing: "border-box",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {data.item}
                </div>
                <span
                  style={{
                    alignItems: "center",
                    borderBottom: "1px solid black",
                    marginRight: "1.5em",
                    marginBottom: "10px",
                    marginTop: "10px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  PRICE
                </span>
                <div
                  style={{
                    boxSizing: "border-box",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {data.price}
                </div>
                <span
                  style={{
                    alignItems: "center",
                    borderBottom: "1px solid black",
                    marginRight: "1.5em",
                    marginBottom: "10px",
                    marginTop: "10px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    display: "flex",
                  }}
                >
                  QUANTITY
                </span>
                <div
                  style={{
                    boxSizing: "border-box",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {data.quantity}
                </div>
                <button
                  onClick={() => {
                    cartCntx.removeItem(data.id);
                  }}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    background: "rgb(231,76,76)",
                    cursor: "pointer",
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div style={{ margin: "5px", fontSize: "1.2rem", top: "0", right: "0" }}>
        <span>Total Amount: </span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button
          onClick={props.onClose}
          style={{
            position: "absolute",
            cursor: "pointer",
            color: "rgb(121, 117, 117)",
            top: "0",
            right: "0",
            margin: "5px",
            fontSize: "16px",
            fontWeight: "1000",
            border: "1px solid rgb(121, 117, 117)",
            borderRadius: "7px",
            padding: "4px",
          }}
        >
          X
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginTop: "50px",
            background: "#56CCF2",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          order
        </button>
      </div>
    </div>
  );
};

export default Cart;

// span style:

// data.item style:

//button style :
