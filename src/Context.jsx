import { createContext, useContext, useState } from "react";

export const Cart_Context = createContext();

const Context = ({children}) => {
  const [Cart, setCart] = useState([]);

  return (
    <Cart_Context.Provider value={{ Cart, setCart }}>
      {children}
    </Cart_Context.Provider>
  );
};
export default Context;

//Custom Hooks Created
export const useCartContext = ()=> {
    const context = useContext(Cart_Context);
    return context;
}

