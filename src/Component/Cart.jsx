import React, {useEffect, useState } from "react";
import "./Cart.css";
import { MdDeleteForever } from "react-icons/md";
import { useCartContext } from "../Context";
const Cart = () => {
  const { Cart, setCart } = useCartContext();

  const [total, settotal] = useState(0);

  const handleDelete = (item) => {
    const update_data = Cart.filter((ele) => {
      return ele.id !== item.id;
    });
    setCart(update_data);
    settotal(total - item.price);
  };

  useEffect(() => {
    if (Cart.length) {
      settotal(Cart.reduce((acc, curr) => acc + Math.floor(curr.price), 0));
    }
  }, [Cart]);

  return (
    <div className="container cart_container">
      <div className="cart_div">
        <div className="cart_heading">
          <h2>List of Add to Cart items</h2>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Items No.1</th>
              <th>Items Name</th>
              <th>Items Images</th>
              <th>Items Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Cart.map((ele, index) => {
              return (
                <tr key={ele.id}>
                  <td>{index + 1}</td>
                  <td>{ele.productname}</td>
                  <td>
                    <img src={ele.image} alt="" />
                  </td>
                  <td>$ {Math.floor(ele.price)}</td>
                  <td>
                    <MdDeleteForever
                      onClick={() => {
                        handleDelete(ele);
                      }}
                      style={{ color: "red", margin: "4px", fontSize: "2rem" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ {total}</strong>
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
