import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
function App() {
  return (
    <div className="App">
        <Cards></Cards>
        <Chart></Chart>
        <CountryPicker></CountryPicker>
    </div>
  );
}

export default App;
