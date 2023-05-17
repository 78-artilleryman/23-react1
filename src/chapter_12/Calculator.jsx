import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>물이 끓습니다</p>
  }
  return <p>물이 끓지 않습니다</p>
}
  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5)/9;
  }

  function toFarenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function tryConert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
      return "";
    }
    const outout = convert(input);
    const rounded = Math.round(outout * 1000) / 1000;
    return rounded.toString();
  }

  function Calculator(props) {
    const[temperature, setTemperature] = useState("");
    const[scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
      setTemperature(temperature);
      setScale("c");
    };

    const handleFahreheitChage = (temperature) => {
      setTemperature(temperature);
      setScale("f");
    };

    const celsius = 
      scale === "f" ? tryConert(temperature, toCelsius) : temperature;
    const fahrenheit = 
      scale === "c" ? tryConert(temperature, toFarenheit) : temperature;
    
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperaturechange={handleCelsiusChange}
          />
          <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperaturechange={handleFahreheitChage}
          />
          <BoilingVerdict celsius = {parseFloat(celsius)}/>
      </div>
    )

  }

export default Calculator;