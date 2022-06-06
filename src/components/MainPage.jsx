import React from 'react'
import './MainPage.css'
import {useNavigate,
        Outlet,
        } from 'react-router-dom'

function MainPage() {

  let navigate = useNavigate();
  function handleClick(){
    navigate("/show-login-popup")
  }



  return (
    <div style={{position:"relative"}}>
      <div className="mainpage">
        <div className="inner-main-page">
          <button className="btn btn-danger"
           onClick={handleClick}>Get the data!</button>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default MainPage
