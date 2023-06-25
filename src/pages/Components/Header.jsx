import "../Css/header.css"

import logo from "../Assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Header() {

    return (
        <div className="header">
            <h1>T2 Gaming</h1>
            <Nav />
        </div>
    )
}
export function Nav(){
    function setActive(){
        let items = document.querySelectorAll('.navItem');
        items.forEach((e)=>{
            if(e.href === window.location.href){
                if(!e.classList.contains('active-href')){
                    e.classList.add('active-href');
                }
            }
        })
    }
    // const [xyz,setxyz] = useState(0);
    useEffect(() => {
        // this runs once per total render of page
        setActive();
    })
    return(
        
        <div className="nav" >
            <Link to={"/"} className="btn navItem">
                Home
            </Link>
            <Link to={"/tournaments"} className="btn navItem" >
                tournaments
            </Link>
            <Link to={"/players"} className="btn navItem">
                players
            </Link>
            <Link to={"/about"} className="btn navItem">
                about
            </Link>
        </div>
    );
    
}
