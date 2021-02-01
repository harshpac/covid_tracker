import React, {Component} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';

class App extends Component {

    state = {
        data: {},  
    }

   async componentDidMount() {
        const data = await fetchData();
        console.log('did mount');
        this.setState({data: data});
    }

  render(){
    const {data} = this.state;
    console.log(data);
    return (
        
        <div className={styles.container}>
            <Cards data = {data}></Cards>
            <Chart></Chart>
            <CountryPicker></CountryPicker>
        </div>
      );
  }
 
}

export default App;
