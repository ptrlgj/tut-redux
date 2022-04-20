import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({type: 'increment'})
  }
  const decrement = () => {
    dispatch({type: 'decrement'})
  }
  const addBy = () => {
    dispatch({type: 'addBy', payload: 10})
  }
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;
