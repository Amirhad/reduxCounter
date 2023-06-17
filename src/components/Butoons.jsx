import React from "react";
import { useDispatch } from "react-redux";
function Butoons() {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch({
      type: "plus",
    });
  };

  const handleMinus = () => {
    dispatch({
      type: "minus"
    });
  };


  const reset = () =>{
    dispatch({
      type: "reset"
    })
  }


  return (
    <div className="buttons">
      <button onClick={handlePlus} className="blueButton btn">
        Увеличить
      </button>
      <button onClick={handleMinus} className="orangeButton btn">
        Уменьшить
      </button>
      <button onClick={reset} className="grayButton btn">Сбросить</button>
    </div>
  );
}

export default Butoons;
