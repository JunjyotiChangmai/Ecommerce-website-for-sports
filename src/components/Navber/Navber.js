import React, { useState } from 'react'
import "./Navber.css"
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Navber = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div>
            <div className="container">
                <div className="logo-section">
                    <div className="logo">SPORTX.</div>
                </div>
                <div className="link-section">
                    <ul>
                        <li onClick={()=>{setMenu("shop")}}> <Link style={{ textDecoration: 'none' }} to='/' >Shop</Link>{menu === "shop"? <hr/> : <></>}</li>
                        <li onClick={()=>{setMenu("cricket")}}> <Link style={{ textDecoration: 'none' }} to='/cricket' >Cricket</Link>{menu === "cricket"? <hr/> : <></>}</li>
                        <li onClick={()=>{setMenu("football")}}> <Link style={{ textDecoration: 'none' }} to='/football' >Football</Link>{menu === "football"? <hr/> : <></>}</li>
                        <li onClick={()=>{setMenu("archery")}}> <Link style={{ textDecoration: 'none' }} to='/archery' >Archery</Link>{menu === "archery"? <hr/> : <></>}</li>
                        <li onClick={()=>{setMenu("badminton")}}> <Link style={{ textDecoration: 'none' }} to='/badminton' >Badminton</Link>{menu === "badminton"? <hr/> : <></>}</li>
                    </ul>
                    <div className="login-btn"> <Link style={{ textDecoration: 'none' }} to='/loginSignUp'>login</Link></div>

                    <div className="cartIcon"><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navber
