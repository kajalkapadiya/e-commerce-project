import { useContext } from "react";
import CartContext from "../../storeRoom/CartContext";
import axios from "axios";

const AddItemForm = (props) => {
  const cartCntx = useContext(CartContext);
  
  const mailId = localStorage.getItem("token");
  const emailId = mailId.replace("@", "").replace(".", "");

  const addItem = async (e) => {
    e.preventDefault();

    cartCntx.addItem({
      id: props.id,
      item: props.item,
      price: props.price,
    });

    let isExisting = false;
    const result = await axios.get(
      `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}`
    );
    if (result.data.length === 0) {
      const order = {
        item: props.item,
        price: props.price,
        quantity: 1,
      };

      axios.post(
        `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}`,
        order
      );
    } else {
      result.data.map((orderItem) => {
        if (props.item === orderItem.item) {
          orderItem.quantity += 1;
          const order = {
            item: props.item,
            price: props.price,
            quantity: orderItem.quantity,
          };
          axios.put(
            `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}/${orderItem._id}`,
            order
          );
          isExisting = true;
        }
      });
      if (isExisting === false) {
        const order = {
          item: props.item,
          price: props.price,
          quantity: 1,
        };
        axios.post(
          `https://crudcrud.com/api/dc496e0b7b3d4e27aeed27bb8dfcad71/${emailId}`,
          order
        );
      }
    }

  };

  return (
    <form onSubmit={addItem} style={{ marginLeft: "auto" }}>
      <button className="btn btn-primary">ADD TO CART</button>
    </form>
  );
};
export default AddItemForm;
