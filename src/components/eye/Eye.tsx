import React, { useState } from "react";
import { ReactComponent as OpenEye } from "../../assets/icons/openEye.svg";
import { ReactComponent as ClosedEye } from "../../assets/icons/closedEye.svg";
import "./eye.css";

export default function Eye(): JSX.Element {
    const [eyeState, setEyeState] = useState(false);
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
