import React, { useEffect } from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Categories } from './components/categories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/login';
import { Books } from './components/books';
import { Cart } from './components/cart';
import { Orders } from './components/myorders';
import {Searchitems} from './components/search';
import { Provider } from 'react-redux';
import store from './components/store/store';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            {
              isAuthenticated ?
              <Route path="/"
                element={
                  <div>
                    <Categories></Categories>
                    <Books genre="home"></Books>
                  </div>
                }>
              </Route>
              :
              <Route path="/" element={<Login></Login>}>
              </Route>
            }
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cart" element={
              <div>
                <Categories></Categories>
                <Cart></Cart>
              </div>
            }>
            </Route>
            <Route path='/myorders' element={<Orders></Orders>}></Route>
            <Route path="/classic" element={
              <div>
                <Categories></Categories>
                <Books genre="classic"></Books>
              </div>}>
            </Route>
            <Route path="/crime" element={
              <div>
                <Categories></Categories>
                <Books genre="crime"></Books>
              </div>}>
            </Route>
            <Route path="/romance" element={
              <div>
                <Categories></Categories>
                <Books genre="romance"></Books>
              </div>}>
            </Route>
            <Route path="/fantacy" element={
              <div>
                <Categories></Categories>
                <Books genre="fantacy"></Books>
              </div>}>
            </Route>
            <Route path="/history" element={
              <div>
                <Categories></Categories>
                <Books genre="history"></Books>
              </div>}>
            </Route>
            <Route path="/horror" element={
              <div>
                <Categories></Categories>
                <Books genre="horror"></Books>
              </div>}>
            </Route>
            <Route path="/biographies" element={
              <div>
                <Categories></Categories>
                <Books genre="biographies"></Books>
              </div>}>
            </Route>
            <Route path="/search" element={<Searchitems></Searchitems>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
