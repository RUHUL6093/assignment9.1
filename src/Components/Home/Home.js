import React from "react";
import { useState } from "react";
import Fakedata from "../../FakeData/FakeData.json";
import Cart from "../Cart/Cart.js";
import "./Home.css";

const Home = () => {
  const data = Fakedata;
  const [cart, setCart] = useState(data);
  return (
    <>
      <div className="container">
        <div className="banner-img">
          <div className="container main-content">
            <div className="card-bg row row-cols-1 row-cols-md-4 bg-4">
              {cart.map((car) => (
                <Cart car={car}></Cart>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
