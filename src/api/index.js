import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
       const {data} = await axios.get(url); 
       
       const modifiedData = {
           confirmed: data.confirmed, 
           recovered: data.recovered,
           deaths: data.deaths,
           lastupdate: data.lastupdate
       }
       console.log(modifiedData);
       return modifiedData;
       
    } catch(error) {
     
    }
}


