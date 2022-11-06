import React from "react";
import { Link } from "react-router-dom";

const Card = ({data:{name, region,population, capital,flags}}) => {
  return (
    <>
      <Link className="card" to={`/${name}`} style={{width:"300px"}}>
        <img
          className="card-img-top"
                  src={ flags.png}
                  alt="Card image"
                  style={{height: "180px", ObjectFit:"fill"}}
         
        />
        <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <h5 className="card-title">Papulation:{ population}</h5>
                  <h5 className="card-title">Region:{ region}</h5>
                  <h5 className="card-title">Capital:{ capital}</h5>
                  
        </div>
      </Link>
    </>
  );
};

export default Card;
