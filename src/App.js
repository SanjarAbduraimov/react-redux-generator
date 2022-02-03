import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import actionTypes from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.counter);
  const increament = () =>
    dispatch({ type: actionTypes.INCREMENT, value: store.counter });
  const decrement = () =>
    dispatch({ type: actionTypes.DECREMENT, value: store.counter });
  const clear = () =>
    dispatch({ type: actionTypes.CLEAR, value: store.counter });
  return (
    <div className="App">
      <h1>{store.counter}</h1>
      <button onClick={increament}>increase</button>
      <button onClick={clear}>clear</button>
      <button onClick={decrement}>decrease</button>
    </div>
  );
}

export default App;
