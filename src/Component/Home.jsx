import React, {useState } from "react";
import "./Home.css";
import { faker } from "@faker-js/faker";
import { Cart_Context, useCartContext } from "../Context";
const Home = () => {
  const { Cart, setCart } = useCartContext();


  const product_data = [...Array(20)].map(() => {
    return {
      id: faker.number.bigInt(),
      productname: faker.commerce.productName(),
      price: Math.floor(faker.commerce.price()),
      image: faker.image.url(),
    };
  });

  const [Product] = useState(product_data);



  const handleCart = (item) => {
    setCart([...Cart, item]);
  };

  const handleRemove = (item) => {
    const updatedCart = Cart.filter((ele) => {
      return ele.id !== item.id;
    });

    setCart(updatedCart);
    console.log(updatedCart);
  };

  return (
    <div className="container product_section">
      <div className="product_main">
        <div className="product_heading">
          <h2>List of Product</h2>
        </div>
        <div className="product_items">
          {Product.map((item, index) => {
            return (
              <div key={index} className="items">
                <div className="img_container">
                  <img src={item.image} alt="" />
                </div>
                <h2>{item.productname}</h2>
                <p>$ {Math.floor(item.price)}</p>
                <button
                  onClick={() => {
                    handleCart(item);
                  }}
                  className="cart_btn"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    handleRemove(item);
                  }}
                  className="remove_btn"
                >
                  Remove Items
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
