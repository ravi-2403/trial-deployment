import {React} from 'react'
import './PopUp.css'
import {useNavigate,
        useLocation,
} from 'react-router-dom'


function PopUp(props) {
  let navigate = useNavigate();
  let location = useLocation();


  function handleclose(props){
    console.log(location.state);
    navigate('/');
  }

  return (
    <div className='main'>
      <div className='main-inner-div'>
        <div className='main-inner-div-item'>
          <div className='main-inner-div-item-text'>
            <h1>Name : {location.state.name}</h1>
            <h3>Email : {location.state.email}</h3>
            <h3>Address : {location.state.address}</h3>
            <h3>Phone : {location.state.phone}</h3>
            <h3>Gender : {location.state.gender}</h3>
          </div>
          <img src={location.state.profilePicture}
               alt="profilePicture  not found"
               className="rounded-circle img-thumbnail border-danger"
               />
          <button onClick={handleclose}>close</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp
