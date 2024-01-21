import styles from "./ButtonsContainer.module.css"


const ButtonsContainer = ({onButtonClick}) =>{

    const ButtonsName = ["c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
    return (
    <div className={styles.buttonsContainer}>
        {ButtonsName.map(buttonName => <button className={styles.btns} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
          </button>)}
   
  </div>
  );
}
export default ButtonsContainer;