import {React,useState} from 'react'
import './MainPage.css'
import {useNavigate,
        Outlet,
  } from 'react-router-dom'
import axios from 'axios'


function MainPage() {
  const [entryData,setEntryData] = useState({});
  let navigate = useNavigate();


  const handleClick = async ()=>{

    const response = await axios.get('https://randomuser.me/api');
    setEntryData(response.data.results[0])
    var entry = {name:`${entryData.name.title} ${entryData.name.first} ${entryData.name.last}`,
                 email:`${entryData.email}`,
                 address:`${entryData.location.city},${entryData.location.country}`,
                 phone:`${entryData.phone}`,
                 profilePicture:`${entryData.picture.large}`,
                 gender:`${entryData.gender}`
               }
    console.log(entryData);
    navigate("/show-login-popup",{state:entry})
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
