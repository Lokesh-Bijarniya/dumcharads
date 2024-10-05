import React, { useState } from 'react'
import style from './Home.module.css'
import Button from './Button';
import {useNavigate} from 'react-router-dom';
export default function Home() {
   const [name, setName] = useState();

   const navigate = useNavigate();

   const handleChange = (e) => {
     setName(e.target.value);
   };

    const handleSubbmit=()=>{
      localStorage.setItem('user',name);
      navigate('/game');
    }
  return (
    <div className={style.home}>
      <div className={style.card}>
      <h1 className={style.gameName}>DUMB CHARADS</h1>
        <form className={style.form}>
          <div className={style.head}>
             <h1 className={style.name}>Player Name:</h1>
             <input type="text" value={name} name="name" placeholder='Player Name' className={style.input} onChange={handleChange} required/>
          </div>
         
          <Button name={"Register"} handler={handleSubbmit} defaultStyle={{"color":"white", "backgroundColor":"black","fontSize":"1.5em","margin":"auto",}}/>
        </form>
      </div>
    </div>
  )
}
