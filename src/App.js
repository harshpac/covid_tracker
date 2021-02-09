import React, {Component} from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';
import image from '../src/images/image.png';
import axios from 'axios';
import Error from '../src/Error/Error';
class App extends Component {

    state = {
        data: {},  
        country: '',
        error: null,
    }

    componentDidMount() {
        axios.get('https://covid19.mathdro.id/api')
        .then(response => {
          console.log(response);
          const modifiedData = {
            confirmed: response.data.confirmed, 
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastupdate: response.data.lastupdate
        }
        this.setState({data: modifiedData});
        })
        .catch(error => {
          this.setState({error:error});
        })
    }

    handleCountryChange = (country) => {
      axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(response => {
          console.log(response);
          const modifiedData = {
            confirmed: response.data.confirmed, 
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastupdate: response.data.lastupdate
        }
        this.setState({data: modifiedData, country: country});
        })
        .catch(error => {
          console.log(error);
          this.setState({error:error});
        })
    }


  render(){
    if(this.state.error || !this.state.data){
      return(
       <Error/>
      )
    }
    const {data, country} = this.state;
    console.log(data);
    return (
        
        <div className="container">
          <img src={image} alt="image" className="image"></img>
            <Cards data = {data}></Cards>
            <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
            <Chart data={data} country={country}></Chart>
        </div>
      );
  }
}

export default App;
