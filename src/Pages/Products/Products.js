import React, { useState } from "react";
import { listItem } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import swal from 'sweetalert'
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import "./products.css";
import Input from "../../Components/Input";

const Products = () => {
  const [cart] = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleClick = () => {
    swal({
      title: "Great Choice",
      text: "successfully added to cart ", 
      icon: "success",
      button: false,
      timer: 2000
    }) 
  }


  return (
    <div>
      <Navbar />
      <Input
            className="search-input"
            placeholder="Search..."
            type="text"
            onChange={(e)=>{setSearch(e.target.value)}}
          />
      <div className="product ">
        {listItem.filter((listProducts) => {
          // eslint-disable-next-line eqeqeq
          if (search == "") {
            return listProducts
          }else if(listProducts.merk.toLowerCase().includes(search.toLowerCase())){
            return listProducts
          }
        }).map((listProducts, idx) => {
          listProducts.quantity = 1;
          return (
            <div className="item" key={listProducts.id}>
              <img src={listProducts.image} alt="" width={200} height={200} />
              <h3 className="title">{listProducts.merk}</h3>
              <p>Rp. {listProducts.cost}</p>
              <p className="stock">Stock: {listProducts.stock}</p>
              <Button
                className="btn-add"
                onClick={() => dispatch({ type: "ADD", payload: listProducts},handleClick())}
              >
                Add To Cart
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
