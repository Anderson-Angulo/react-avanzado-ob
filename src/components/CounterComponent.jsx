import {useCounter} from '../hooks/useCounter'
const CounterComponent = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {counter,updateCounter,reset}=useCounter(-2,-2,5)
  return (
    <div>
      <button onClick={()=>updateCounter(-1)}>-</button>
      <span>{counter}</span>
      <button  onClick={()=>updateCounter(1)}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default CounterComponent