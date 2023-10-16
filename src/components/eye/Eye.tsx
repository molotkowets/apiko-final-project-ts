import React, { useState, useEffect } from "react";
import { ReactComponent as OpenEye } from "../../assets/icons/openEye.svg";
import { ReactComponent as ClosedEye } from "../../assets/icons/closedEye.svg";
import "./eye.css";

interface IProps {
    setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Eye({ setShowPass }: IProps): JSX.Element {
    const [eyeState, setEyeState] = useState(false);
    useEffect(() => {
        setShowPass(eyeState);
    }, [eyeState]);
    const Eye = eyeState ? OpenEye : ClosedEye;
    return (
        <div
            onClick={() => {
                setEyeState(!eyeState);
            }}
            className="eye-button">
            <Eye />
        </div>
    );
}
