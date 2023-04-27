import React, {useState} from "react";

function ConfirmButton(props){
  const [isConfigrmed, setIsConfigrmed] = useState(false);

  const handleConfirm = ()=>{
    setIsConfigrmed((prevIsConfirmed) => !prevIsConfirmed)
  };

  return(
    <button onClick={handleConfirm} disabled={isConfigrmed}>
      {isConfigrmed ? "확인됨" : "확인하기"}
    </button>
  )
}

export default ConfirmButton