import React from "react";
import Logo from "./assets/phone_vector.jpg"
const CartItem =(props)=> {
  const { price, title, qty } = props.product;
    const { product, onIncQuan, onDecQuan, onDelete } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={Logo} alt="" />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Price Rs. {price}</div>
          <div style={{ color: "#777" }}>Qty : {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={() => onIncQuan(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={() => onDecQuan(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
              onClick={() => onDelete(product.id)}
            />
          </div>
        </div>
      </div>
    );
}

const styles = {
  image: {
    height: 130,
    width: 130,
    borderRadius: 10,
    background: "#ccc",
    border: 0,
    outline: 0,
  },
};

export default CartItem;
