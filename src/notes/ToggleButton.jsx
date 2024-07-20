import { useState } from "react";

const ToggleButton = () => {

    const [isOn,setIsON] = useState(false);

    const handleIsON = () => {
        setIsON(!isOn);
    }

    const btnStyle = {
        color: isOn ? "#fff" : "#000",
        backgroundColor: isOn? "#00ff00" : "#808080"
    }

    return(
        <>
        <button style={btnStyle} onClick={handleIsON}>{isOn ? "ON":"OFF"}</button>
        </>
    );
}

export default ToggleButton