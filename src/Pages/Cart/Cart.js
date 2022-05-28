import React, { useState } from "react";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../Components/Modal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [openModal, setOpenModal] = useState();
  const [selects, setSelects] = useState();
  const navigate = useNavigate();
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.cost * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  console.log("INI TOTAL", total);

  const handleClick = () => {
    navigate("/succes");
  };

  return (
    <div>
      <Navbar />
      <div className="display-cart">
        <div className="cart">
          {cart.map((item) => {
            return (
              <div className="selected" key={item.id}>
                <img src={item.image} alt="" width={200} height={200} />
                <div className="desc-stuf">
                  <h3>{item.merk}</h3>
                  <p>Rp. {item.cost}</p>
                  <span>Size</span>
                  <select
                    className="selects"
                    value={selects}
                    onChange={(e) => setSelects(e.target.value)}
                  >
                    <option>M</option>
                    <option>L</option>
                    <option>S</option>
                    <option>XL</option>
                  </select>
                  <p>Stock {item.stock}</p>
                  <Button
                    className="btn-remove"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    Remove
                  </Button>
                  {openModal && (
                    <Modal
                      className="d-flex flex-column"
                      closeModal={setOpenModal}
                    >
                      <p>Barang yang anda pesan akan dihapus dari keranjang!</p>
                      <Button
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item })
                        }
                        className="btn-accept me-3"
                      >
                        Lanjutkan
                      </Button>
                      <Button
                        onClick={() => {
                          setOpenModal(false);
                        }}
                        className="btn-cancel"
                      >
                        Batal
                      </Button>
                    </Modal>
                  )}
                </div>
                <div className="quantity">
                  <button
                    className="btn-temp"
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREEMENT", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    -
                  </button>
                  <div className="qt">{item.quantity}</div>
                  <button
                    className="btn-temp"
                    onClick={() =>
                      dispatch({ type: "INCREEMENT", payload: item })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

              <div className="payment">
                <h3>The total amount of</h3>
                {total > 0 && (
                  <h4>
                    Total <span className="price">Rp.{total}</span>
                  </h4>
                )}
                <hr />
                <Button
                  className="btn-checkOut"
                  onClick={() =>
                    dispatch(handleClick())
                  }
                >
                  Check Out
                </Button>
              </div>

      </div>
    </div>
  );
};

export default Cart;
