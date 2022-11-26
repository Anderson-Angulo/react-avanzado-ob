import { useState } from "react";
export const useCounter=(initialValue=0,minValue=0,maxValue=10)=>{
  const [counter, setCounter] = useState(initialValue);

  const updateCounter=(value)=>{
    const newCounterValue=Math.min(Math.max(counter+value,minValue),maxValue)
    setCounter(newCounterValue)
  }

  const reset=()=>{
    setCounter(initialValue)
  }

  return {counter, updateCounter,reset}
}

