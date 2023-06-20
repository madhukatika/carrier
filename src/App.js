
import './App.css';
import Search_data from './Components';
import ThermostatDataBrowser from './Components/Browser/ThermostatDataBrowser';
import allFiles from '../src/json_data/merged_file.json'


function App() {
  return (
    <>
  <Search_data/>
  <ThermostatDataBrowser/>
 
  </>
   
  );
}

export default App;
