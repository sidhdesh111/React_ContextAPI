# React Shopping Cart with Context API & useReducer

This project demonstrates a robust and scalable shopping cart application built with React, leveraging the Context API for global state management and the `useReducer` hook for complex state logic. It focuses on clean architecture, performance considerations, and an intuitive user experience.

## ✨ Features

* **Product Listing:** Displays a list of dummy products available for purchase.
* **Dynamic Add-to-Cart:** Seamlessly add products to the cart with real-time quantity updates.
* **Quantity Management:** Adjust product quantities directly within the cart.
* **Remove from Cart:** Easily remove items from the cart.
* **Real-time Total Calculation:** Automatically calculates the total value of items in the cart based on quantities and prices.
* **Performance Optimization:** Includes **lazy loading** for product images/components and **skeleton loaders** on initial fetch to enhance perceived performance and user experience.
    * *(Note on Skeleton Loaders: The visual effect of skeleton loaders might be subtle or require specific network conditions to be fully appreciated in live demos, but they are implemented in the code for optimal performance.)*
* **Intuitive Product Filtering:** (If applicable) Filter products based on categories, price, etc.
* **Global State Management:** All cart-related state is managed centrally using React Context API.

## 🚀 Technologies Used

* **React (v18+)**: Frontend library for building user interfaces.
* **React Context API**: For efficient, global state management across components without prop-drilling.
* **`useReducer` Hook**: For managing complex state transitions within the cart logic, providing a more predictable and scalable alternative to multiple `useState` calls.
* **React Router Dom (v6+)**: For seamless, client-side navigation (if multiple pages like product detail/checkout are implemented).
* **JavaScript (ES6+)**: Core programming language.
* **HTML5 / CSS3**: For structuring and styling the application.
    * *(Note on Styling: The styling (CSS) in this project is functional and minimalistic, designed primarily to demonstrate the core React functionalities, state management, and performance optimizations rather than being a polished UI design.)*

## 📦 Installation & Setup

To get this project up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/sidhdesh111/React_ContextAPI.git](https://github.com/sidhdesh111/React_ContextAPI.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd react-context-cart
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # OR
    yarn start
    ```
    The application will typically open in your browser at `http://localhost:3000` (or another port specified by your development server).

## 💡 Usage

Once the application is running:

1.  Browse the product list.
2.  Click "Add to Cart" on any product.
3.  View the cart (usually an icon or a separate page/component) to see added items, adjust quantities, or remove items.
4.  Observe the real-time total update.

## 📁 Project Structure (Key Files)

* `src/`: Main application source code.
    * `src/App.js`: Root component of the application.
    * `src/index.js`: Entry point of the React app.
    * `src/components/`: Contains reusable UI components (e.g., `ProductItem.js`, `Cart.js`, `Header.js`).
    * `src/context/`: **This is where the core Context API logic resides.**
        * `src/context/CartContext.js`: Defines the Cart Context (`createContext`).
        * `src/context/CartProvider.js`: Manages the cart state using `useReducer` and provides the context value to its children. This is where all the cart's logic (add, remove, update) is handled.
    * `src/data/products.js`: (Optional) A simple file for dummy product data.
    * `src/hooks/`: (Optional) Custom hooks if any (e.g., `useHttp`).

## 🛣️ Future Enhancements

* Integration with a real backend API for persistent data.
* User authentication and personalized shopping carts.
* Checkout process with payment integration.
* More sophisticated filtering and sorting options.
* Responsiveness improvements for various screen sizes.
* Adding unit and integration tests.

## ✒️ Author

* **[Sidhdesh Srivastava/Alias]** - [Your GitHub Profile Link (e.g., `https://github.com/sidhdesh111`)]
* [Your LinkedIn Profile Link (Optional)]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
