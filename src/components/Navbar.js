import React , { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import  Badge  from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar() {

  let data = useCart();
  const [cartView, setCartView] = useState(false)

  localStorage.setItem('temp', "first")

  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/");
  }

  const loadCart = () => {
    setCartView(true)
}

// const items = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="#">Foodie</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken"))?
                <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                </li>
              : ""
              } 
              
            </ul>

            {(!localStorage.getItem("authToken"))?
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/SignUp">SignUp</Link>

            </div>
            :
            <div>
              <div className='btn bg-white text-success mx-2' onClick={loadCart}>
                My Cart{" "} 
                <Badge pill bg = "danger" > {data.length} </Badge>
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
              <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>LogOut</div>
            </div>
            }
            
          </div>
        </div>
      </nav>
    </div>
  )
}
