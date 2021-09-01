import React ,{useState, useEffect}from 'react';
// import axios from 'axios';
import { Cards, States } from './components';
import styles from './App.module.css';

import image from './images/image.png';

const App = () =>{
  const [data, setData] = useState({});
  const [state, setState] = useState([]);
  
const url = 'https://data.covid19india.org/data.json';

const fetchData = async () => {
  try {
    const response = await fetch(`${url}`);
    const res = await response.json();
    const daily = (res.cases_time_series[res.cases_time_series.length-1]);
    setData(daily);
   } 
  catch (error) {
    console.log(error);
  }
};

const fetchStates = async () => {
  try {
    const response = await fetch(`${url}`);
    const res = await response.json();
    console.log( [res.statewise]);
    setState( res.statewise);
  } 
  catch (error) {
    return error;
  }
};

  useEffect(() => {
    fetchData();
    fetchStates();
  },[])
   
  return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <States states={state} />
        <footer><p>Created by PRAVEEN SAINI</p></footer>
     </div>
      
    );
  }


export default App;
