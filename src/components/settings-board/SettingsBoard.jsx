import React from 'react'
import './settings-board.css'
import { NavLink } from 'react-router-dom'

export default function SettingsBoard({setShowBoard, setIsAuth}) {
  const data = JSON.parse(localStorage.getItem("onAuth")).account
  const logOut = ()=>{
    setIsAuth('')
    localStorage.removeItem("onAuth")
    console.log("logOut")
  }

  return (
    <div className='settings-board'>
      <div className='settings-container infoToAccount'>
        <p className='settings-board-name'>{data.fullName}</p>
        <p className='settings-board-email'>{data.email}</p>
      </div>
      <div onClick={()=>setShowBoard(false)} className='button-settings-off'></div>
      <div className='settings-container settings-control-panel'>
        <NavLink className={"settings-container-bottom"} to={'edit-account'}>Settings</NavLink>
        {/* <button>Settings</button> */}
        <button onClick={()=>logOut()} className='button-log-out'>Log out</button>
      </div>
    </div>
  )
}


