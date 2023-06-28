import { useContext, useEffect, useState } from "react";
import CartContext from "../../storeRoom/CartContext";
import axios from "axios";

const AddItemForm = (props) => {
  const [initialRender, setInitialRender] = useState(false);
  const cartCntx = useContext(CartContext);

  useEffect(() => {
    const loadData = async () => {
      const mailId = localStorage.getItem("token");
      const emailId = mailId.replace("@", "").replace(".", "");
      const id = localStorage.getItem("_id");
      const item = {
        item: cartCntx.item,
      };

      if (initialRender) {
        if (id && emailId) {
          const userData = await axios.put(
            `https://crudcrud.com/api/a016a8b88a3d45169ef2fefbdd7b6d65/${emailId}/${id}`,
            item
          );
          console.log(userData);
        }
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const mailId = localStorage.getItem("token");
      const emailId = mailId.replace("@", "").replace(".", "");

      if (!initialRender) {
        const getItem = await axios.get(
          `https://crudcrud.com/api/a016a8b88a3d45169ef2fefbdd7b6d65/${emailId}`
        );
        cartCntx.loadItem(getItem.data[0]?.item || []);
        setInitialRender(true);
        console.log("getData");
      }
    };

    getData();
  }, [cartCntx, initialRender]);

  const addItem = (e) => {
    e.preventDefault();

    let order = {
      id: props.id,
      item: props.item,
      price: props.price,
      quantity: 1,
    };

    cartCntx.addItem(order);
  };

  return (
    <form onSubmit={addItem} style={{ marginLeft: "auto" }}>
      <button className="btn btn-primary">ADD TO CART</button>
    </form>
  );
};

export default AddItemForm;
