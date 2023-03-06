import {Outlet, Link} from "react-router-dom"

export default function Root() {
    return (
      <>
        <div id='nav-bar-container'>
          <nav id="nav-bar">
            <ul id="nav-links">
                <li>
                <Link to={'home'}>Home</Link>
              </li>
              <li>
                <Link to={'products'}>Products</Link>
              </li>
              <li>
                <Link to={'contact'}>Contact</Link>
              </li>
            </ul>
            <button id="cart">
              <Link to={'cart'}>CART</Link>
              </button>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }