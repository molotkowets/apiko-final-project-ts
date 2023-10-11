import React, { useState } from "react";
import "./auth-active.css";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
// import SettingsBoard from '../settings-board/SettingsBoard'

// interface IState {
//   setIsAuth: string
// }

export default function HeaderProfile(): JSX.Element {
  // const storage: string | null = localStorage.getItem("onAuth")
  // const name = storage?.account?.fullName
  const [showBoard, setShowBoard] = useState(false);

  return (
    <div className="auth-active-container">
      {/* <h3 className='header-welcome'>Welcome, {name}!</h3> */}
      <button
        onClick={() => {
          setShowBoard(!showBoard);
        }}
        className="accountButton">
        <div className="accountAvatarOnHeader">
          {/* <p className='letter'>{name[0].toUpperCase()}</p> */}
        </div>
        <Arrow className="arrow-account" />
      </button>
      {/* {showBoard && <SettingsBoard setIsAuth={setIsAuth} setShowBoard={setShowBoard}/>} */}
    </div>
  );
}
