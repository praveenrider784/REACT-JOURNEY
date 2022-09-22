import logo from './logo.svg';
import './App.css';
import Fragments from './Components/Fragments';
import Table from './Components/table'
import Refs from './Components/Refsdemo'
import Focusref from './Components/Parentinputref'

function App() {
  return (
    <div className="App">
     {/* <Fragments/> */}
    {/* <Table/> */}
    {/* <Refs /> */}
    <Focusref />
    </div>
  );
}

export default App;
