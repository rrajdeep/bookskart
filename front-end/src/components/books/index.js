import React, { useEffect, useState } from "react";
import "./books.css";
// import { BooksData } from "../data";
import { Product } from "./product";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../store/cartSlice";
import axios from "axios";

export const Books = (props) => {

const [products, setProducts] = useState([]);


const fetChProducts = async () => {
    const url = "http://localhost:3001/books?genere=" + props.genre;
    const res = await axios.get(url);
    setProducts(res.data);
};
fetChProducts();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className="books-container">
                {    
                    products.map((ele, index) => {
                        return (
                            <Product key={index} data={ele}></Product>
                        );
                    })
                }
            </div>
        </div>
    );
}