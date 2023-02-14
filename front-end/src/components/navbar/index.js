import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrders, addToSearch, resetTotal } from "../store/cartSlice";
import axios from "axios";
import { Books } from "../books";
import { Product } from "../books/product";
import "../books/books.css"

export const Navbar = () => {

    const navigate = useNavigate();

    const { loginWithRedirect, logout } = useAuth0();
    const [products, setProduts] = useState([]);

    const { user, isAuthenticated } = useAuth0();
    const items = useSelector((state) => state.cart.basket);
    const dispatch = useDispatch();

    if (items.length === 0) {
        dispatch(resetTotal());
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const item = event.target[0].value;
            const url = "http://localhost:3001/search?item=" + item;
            const res = await axios.get(url);
            console.log('url', url);
            console.log("search response", res.data);
            dispatch(addToSearch(res.data));
            navigate("/search");
        } catch (error) {
            console.log("Error", error)
        }
    }

    return (
        <div className="navbar-container">
            <div className="logo-div">
                <Link to="/" className="nav-links">Bookskart</Link>
                <Link to="/" className="expolre-plus">Explore <span className="plus">Plus</span></Link>
            </div>
            <div className="search-container">
                <form onSubmit={(event) => handleSubmit(event)} className="search-form">
                    <div className="search-div">
                        <div className="search-input-div">
                            <input type="text" className="input-tag" placeholder="Search for books or authors" />
                        </div>
                        <button type="submit" className="search-btn"><BiSearch size={20}></BiSearch></button>
                    </div>
                </form>
            </div>
            {
                isAuthenticated ? (
                    <div className="nav-login-div" onClick={() => logout({ returnTo: window.location.origin })}>
                        Logout
                    </div>
                ) : (
                    <div className="nav-login-div" onClick={() => loginWithRedirect()}>
                        Login
                    </div>
                )
            }
            <div className="shopping-cart-div">
                <Link to="/cart" className="nav-links">
                    <div className="cart-div">
                        <FaShoppingCart size={20} />
                        <div className="cart-counter">{items.length}</div>
                    </div>
                </Link>
            </div>
            <div className="nav-more-div">
                <Link to="/myorders" className="nav-links">
                    My orders
                </Link>
            </div>
            {
                isAuthenticated ? <div className="nav-user"><CgProfile size={20}></CgProfile><span style={{marginLeft: "5px"}}>{user.name}</span></div> : <div></div>
            }
        </div>
    )
}
