import './App.css';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import { Cart } from './Components/Cart';
import { Products } from './Components/Products';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Routes/route';
import ErrorPage from './error-page';
import { useState } from 'react';


function App() {

  const [cart, setCart] = useState([])

  const handleCart = (result) => {

      const exisitngIndex = cart.findIndex((item) => item.name === result.name)

      if (exisitngIndex >= 0) {
      const newQuantity = cart[exisitngIndex].quantity + result.quantity

      const updatedCart = {...cart[exisitngIndex], quantity : newQuantity}

      const newCart = [
        ...cart.slice(0, exisitngIndex), updatedCart, ...cart.slice(exisitngIndex + 1)
      ]; 
      setCart(newCart);
      }
      else {
      setCart([...cart, result])
      }
  }

const handleDelete = (deleteRequest) => {

  const newArray = cart.filter((item) => item.name !== deleteRequest)
  setCart(newArray)

}


  const router = createBrowserRouter([
    {
      
      path: "/shopping-cart",
      element: <Root cartNo={cart.length}/>,
      errorElement: <ErrorPage />,
      children: [
        {
        path: "contact",
        element: <Contact text="some text"/>,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products handleCart={handleCart}/>,
        },
        {
          path: "cart",
          element: <Cart cart={cart} handleDelete={handleDelete}/>,
        },
        {
          index: true,
          element: <Home />,
        },
      ]
    }
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
