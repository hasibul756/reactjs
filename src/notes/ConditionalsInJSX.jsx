// You can either return a JSX early or you can use ternary operators for conditinals in JSX.

import { useEffect, useState } from "react";

const Conditional = () => {

    const [checkAge,setCheckAge] = useState(false);

    const legalAge = 18;
    const age = 19;
    const username = "Sam";

    useEffect(()=>{
        setCheckAge(age >= legalAge);
    },[age,legalAge]);

    return (
        <>
            <p>{checkAge ? "Adult" : "Minor"}</p>
            <p>{checkAge && "You can Vote"}</p>
            <p>{username || "Guest"}</p>
            <button disabled={!checkAge}>{checkAge? "Watch Now" : "Restricted"}</button>
        </>
    );
}

export default Conditional