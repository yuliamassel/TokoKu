import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import Navbar from '../../Components/Navbar'
import "./Succes.css"

const Succes = () => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/")
  }

  return (
    <div>
      <Navbar/>
    <div className='succes'>
      <h2>Sukses Memesan</h2>
      <img src="/img/Order confirmed.png" alt="" width={500}/>
      <h5>Terimakasih Telah Belanja di TokoKu</h5>
      <Button className="btn-back" onClick={handleClick}>Back Home</Button>
    </div>
    </div>
  )
}

export default Succes