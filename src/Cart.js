import React from "react";
import CartItem from "./CartItem";
const Cart = (props)=> {
    const { products } = props;

    return (
      <div className="cart" style={{display:'flex',alignItems:'center'}}>
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncQuan={props.onIncQuan}
              onDecQuan={props.onDecQuan}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    );
  
}

export default Cart;
