import { useContext } from "react";
import CartContext from "../../storeRoom/CartContext";

const CartSpan = (props) => {
  const cartCntx = useContext(CartContext);
  const totalItem = cartCntx.item.length;

  return (
    <div className="position-fixed" style={{ right: "2rem", top: "0.5rem" }}>
      <button className="btn btn-primary" onClick={props.onShowCart}>
        <span>Cart</span>
        <span>{totalItem}</span>
      </button>
    </div>
  );
};

export default CartSpan;
