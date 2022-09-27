import logo from './logo.svg';
import './App.css';
import Fragments from './Components/Fragments';
import Table from './Components/table'
import Refs from './Components/Refsdemo'
import Focusref from './Components/Parentinputref'
import Forwarding from './Components/Forwardingpref'
import Click from './Components/Click'
import Hover from './Components/Hover'
import Componentd from './Components/componentd';
import { Userprovider } from './Components/Context';
import Hooks from './Components/Reacthooks'
import Hook from './Components/Hookcounter'
import Usestateobject from './Components/usestateobject';
import Usestatearray from './Components/Usestatearray';

function App() {
  return (
    <div className="App">
     {/* <Fragments/> */}
    {/* <Table/> */}
    {/* <Refs /> */}
    {/* <Focusref /> */}
    {/* <Forwarding/> */}
    {/* <Click/> */}
    {/* <Hover /> */}
    {/* <Userprovider value={"vishwas"}>
    <Componentd/>
    </Userprovider> */}
    {/* <Hook/> */}
    {/* <Hook/> */}
    {/* <Usestateobject/> */}
    <Usestatearray/>

    </div>
  );
}

export default App;
