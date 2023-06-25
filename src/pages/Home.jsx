import React from 'react'
import Main from './Components/Main'
import Header from './Components/Header'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    window.onscroll = ()=>{
      if(window.scrollY<document.querySelector('.main').offsetTop){
        document.querySelector('.header').style.color = "black"
        document.querySelectorAll('.navItem').forEach((e)=>{
          e.style.color = "black"
        })
      }
      else{
        document.querySelector('.header').style.color = "white"
        document.querySelectorAll('.navItem').forEach((e)=>{
          e.style.color = "white"
        })
      }
    }
  

  })
  
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home
