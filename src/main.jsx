import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import Context from "./Context";
import Reducer_com from "./Reducer_Com/Reducer_com.jsx";

createRoot(document.getElementById("root")).render(
  // // <BrowserRouter>
  //   {/* <Context> */}
  //     {/* <App /> */}
    
  //   {/* </Context> */}
  // // </BrowserRouter>
    <Reducer_com/>
);
