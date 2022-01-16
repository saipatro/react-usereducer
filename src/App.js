import './App.css';
import { counterReducer, initialState } from '../src/Reducers/counterReducers';
import { CounterProvider } from './Context/counterContext';
import Dropdown from './Dropdown';

function App() {

  return (
    <CounterProvider reducer={counterReducer} initialState={initialState}>
      <div className="App">
        <Dropdown />
      </div>
    </CounterProvider>
  );
}

export default App;