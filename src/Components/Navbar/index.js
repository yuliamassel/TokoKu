import React from "react";
import "./navbar.css";
import * as BsIcons from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    const handleClick = (e) =>{
        e.preventDefault();
        if (e.target.innerText === "TokoKu") {
            navigate("/")
        }else{
            navigate('/cart')
        }
    }

  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <BsIcons.BsShop size={50}/>
          <span onClick={handleClick}>TokoKu</span>
        </div>
        <BsIcons.BsFillCartFill className="icon" onClick={handleClick} size={30}/>
      </div>
    </div>
  );
};

export default Navbar;
