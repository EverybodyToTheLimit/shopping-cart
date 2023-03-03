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


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart cart={cart} />,
        },
      ]
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
