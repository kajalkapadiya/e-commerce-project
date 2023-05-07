import React, { useEffect, useState } from "react";
import axios from "axios";

// const TotalItem = createContext();

const Cart = (props) => {
  const [totalAmount, setTotalAmount] = useState();
  const [totalItem, setTotalItem] = useState();
  const [item, setItem] = useState([]);
  useEffect(() => {
    loadItem();
  }, []);

  const mailId = localStorage.getItem("token");
  const emailId = mailId.replace("@", "").replace(".", "");

  const loadItem = async () => {
    let total = 0;
    let numberOfItem = 0;
    const result = await axios.get(
      `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}`
    );
    setItem(result.data);
    result.data.map((prices) => {
      // set total amount
      total += prices.quantity * Number(prices.price);
      setTotalAmount(total.toFixed(2));
      //set total item
      numberOfItem += Number(prices.quantity);
      setTotalItem(numberOfItem);
      console.log(totalItem);
    });
  };

  const removeItem = async (id) => {
    let isRemove = window.confirm("are you sure");
    if (isRemove) {
      await axios.delete(
        `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}/${id}`
      );
    }
    loadItem();
  };
  return (
    <>
      {/* <TotalItem.Provider value={totalItem} /> */}
      {item.map((data) => {
        return (
          <div key={data._id}>
            <div key={item._id}>
              <div>{data.item}</div>
              <div>{data.price}</div>
              <div>{data.quantity}</div>
              <button onClick={() => removeItem(data._id)}>Remove Item</button>
            </div>
          </div>
        );
      })}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>close</button>
        <button>order</button>
      </div>
    </>
  );
};

export default Cart;
// export { TotalItem };
