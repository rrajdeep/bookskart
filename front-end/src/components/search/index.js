import React from "react";
import { Product } from "../books/product";
import "../books/books.css";
import { useSelector } from "react-redux";

export const Searchitems = () => {

    const data = useSelector((state) => state.cart.search);
    
        if(data.length === 0) {
            return (
            <h1>Product not found... Please try again</h1>
            )
        } else {
            return(
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className="books-container">
                        {    
                            data.map((ele, index) => {
                                return (
                                    <Product key={index} data={ele.book}></Product>
                                );
                            })
                        }
                    </div>
                </div>
            )
        }
}
