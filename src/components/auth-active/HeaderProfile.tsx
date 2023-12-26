import React, { useState } from "react";
import "./auth-active.css";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { useAuth } from "../../hooks/useAuth";
import SettingsBoard from "../settings-board/SettingsBoard";

export default function HeaderProfile(): JSX.Element {
    const [showBoard, setShowBoard] = useState(false);
    const firstLetter = useAuth().account.fullName?.toString()[0];

    return (
        <div className="auth-active-container">
            <h3 className="header-welcome">Welcome, {useAuth().account.fullName}!</h3>
            <button
                onClick={() => {
                    setShowBoard(!showBoard);
                }}
                className="accountButton">
                <div className="accountAvatarOnHeader">
                    <p className="letter">{firstLetter?.toUpperCase()}</p>
                </div>
                <Arrow className="arrow-account" />
            </button>
            {showBoard && <SettingsBoard />}
        </div>
    );
}

// setIsAuth={setIsAuth} setShowBoard={setShowBoard}
