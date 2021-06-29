import { useSelector } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  return <div className="App">The count is {counter}</div>;
}

export default App;
