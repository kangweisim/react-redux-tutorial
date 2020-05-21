import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function MyFavouriteNumbers() {
  const [numToAdd, setNumToAdd] = useState("");
  const numbers = useSelector(state => state.numbers);
  const dispatch = useDispatch();

  const addNum = () => {
    if (numToAdd) dispatch(actions.numbers.add(numToAdd));
    setNumToAdd("");
  }

  const removeNum = (num) => {
    dispatch(actions.numbers.remove(num));
  }

  return (
    <div>
      <input type="number" value={numToAdd} onChange={(e) => setNumToAdd(e.target.value)} />
      <button onClick={() => addNum()}>
        Add
      </button>
      {numbers.map((num, index) => (
        <div key={index}>
          <button onClick={() => removeNum(num)}>{num}</button>
        </div>
      ))}
    </div>
  );
}

function IsEvenNumber(props) {
  const { num } = props;
  const isEven = num % 2 === 0;
  return isEven ? "Even Steven!" : "That's odd...";
}

export default MyFavouriteNumbers;
