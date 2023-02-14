import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./categories.css";

export const Categories = () => {

    const [activeCat, setActiveCat] = useState("");
    const [activeCatTab, setActveCatTab] = useState("");

    return (
        <div className="category-container">
            <div className="category-div">
                <Link to="/" className="cat-link">
                    <div className={`${activeCatTab === "home" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("home")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('home')}>
                        <div className="category-book-div">
                            <img src="./images/home.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "home" && "active-category"} cat-name`}>
                            Home
                        </div>
                    </div>
                </Link>
                <Link to="/classic" className="cat-link">
                    <div className={`${activeCatTab === "classic" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("classic")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('classic')}>
                        <div className="category-book-div">
                            <img src="./images/img-classic.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "classic" && "active-category"} cat-name`}>
                            Classics
                        </div>
                    </div>
                </Link>
                <Link to="/crime" className="cat-link">
                    <div className={`${activeCatTab === "crime" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("crime")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('crime')}>
                        <div className="category-book-div">
                            <img src="./images/img-crime.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "crime" && "active-category"} cat-name`}>
                            Crime
                        </div>
                    </div>
                </Link>
                <Link to="/romance" className="cat-link">
                    <div className={`${activeCatTab === "romance" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("romance")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('romance')}>
                        <div className="category-book-div">
                            <img src="./images/img-fairytales.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "romance" && "active-category"} cat-name`}>
                            Romance
                        </div>
                    </div>
                </Link>
                <Link to="/fantacy" className="cat-link">
                    <div className={`${activeCatTab === "fantacy" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("fantacy")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('fantacy')}>
                        <div className="category-book-div">
                            <img src="./images/img-fantacy.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "fantacy" && "active-category"} cat-name`}>
                            Fantacy
                        </div>
                    </div>
                </Link>
                <Link to="/history" className="cat-link">
                    <div className={`${activeCatTab === "history" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("history")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('history')}>
                        <div className="category-book-div">
                            <img src="./images/img-history.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "history" && "active-category"} cat-name`}>
                            History
                        </div>
                    </div>
                </Link>
                <Link to="/horror" className="cat-link">
                    <div className={`${activeCatTab === "horror" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("horror")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('horror')}>
                        <div className="category-book-div">
                            <img src="./images/img-horror.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "horror" && "active-category"} cat-name`}>
                            Horror
                        </div>
                    </div>
                </Link>
                <Link to="/biographies" className="cat-link">
                    <div className={`${activeCatTab === "biographies" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("biographies")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('biographies')}>
                        <div className="category-book-div">
                            <img src="./images/img-humour.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "biographies" && "active-category"} cat-name`}>
                            Biographies
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
