import React from 'react';
import  '../../App.css'
import './Country.css'

const country = ({country}) => {
    const handleVisited = () =>{
        console.log("Button Clicked!");
    }
    return (
        <div className='card'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Country Name: {country.name.common}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                country.area.area > 30000 ? "(Big country)" : "(Small country)"}</p>
            <button onClick={handleVisited} style={{padding:"10px",margin:"10px"}}>Not Visited</button>
        </div>
    );
};

export default country;