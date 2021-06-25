import React from "react";
import { useHistory } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { name, image } = props.car;
  const history = useHistory();
  const handleCart = () => {
    history.push(`/destination/${name}`);
  };
  return (
    <div>
      <div className="col">
        <div className="container car">
          <div className="card car-board " onClick={handleCart}>
            <div className="team-img">
              <img className="img-fluid w-50 mx-auto mt-2" src={image} alt="" />
            </div>
            <div className="card-body">
              <h2 className="text-white">{name}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
