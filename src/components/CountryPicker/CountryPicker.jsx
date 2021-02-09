import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import './CountryPicker.css';
import {fetchCountries} from '../../api';

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries ] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
           setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setFetchedCountries]);
     console.log('hhhhhhhh')
    console.log(fetchedCountries);

    return (
        <FormControl className="formControll">
            <NativeSelect defaultValue="" onChange={(e)=>props.handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries?fetchedCountries.map((country,i)=><option key = {i} value={country}>{country}</option>):null}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;