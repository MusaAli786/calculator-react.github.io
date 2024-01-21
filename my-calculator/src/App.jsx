import styles from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {

  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) =>{
    if(buttonText === "c"){
     setCalValue("");
    }else if(buttonText === "="){
     const result = eval(calValue);
     setCalValue(result);
    }else{
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  } 
  return (
    <div className={styles.calculator}>
    <Display displayValue={calValue} />
    <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
   
  );
}

export default App;
