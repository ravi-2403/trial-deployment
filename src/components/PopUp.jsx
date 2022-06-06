import React from 'react'
import './PopUp.css'
import {useNavigate} from 'react-router-dom'
function PopUp(props) {
  let navigate = useNavigate();
  function handleclose(props){
    navigate('/');
  } 
  return (
    <div className='main'>
      <div className='main-inner-div'>
        <div className='main-inner-div-item'>
          <div className='main-inner-div-item-text'>
            <h1>Name : Atul Kumar</h1>
            <h3>Email : ravikdtg@gmail.com</h3>
            <h3>Address : Bangalore,India</h3>
            <h3>Phone : 7484906645</h3>
          </div>
          <button onClick={handleclose}>close</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp