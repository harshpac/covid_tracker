import React, {Component} from 'react';
import './App.modules.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';

class App extends Component {

    state = {
        data: {},  
        country: '',
    }

   async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
       const fetchedData = await fetchData(country);
       this.setState({ data: fetchedData, country: country});
    }

  render(){
    const {data, country} = this.state;
    console.log(data);
    return (
        
        <div className="container">
            <Cards data = {data}></Cards>
            <h1 className ="country">helloooooooooooooooo</h1>
            <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
            <Chart data={data} country={country}></Chart>
        </div>
      );
  }
}

export default App;
