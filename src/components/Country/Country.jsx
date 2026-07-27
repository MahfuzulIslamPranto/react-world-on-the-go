import React, { useState } from 'react';
import  '../../App.css'
import './Country.css'

const country = ({ country, handleVisitedCountries, handleFlags }) => {
    const [visited,setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(visited ? false:true);
        handleVisitedCountries(country);
    }
    return (
        <div className={`card ${visited && 'visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Country Name: {country.name.common}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                country.area.area > 30000 ? "(Big country)" : "(Small country)"}</p>
            <button onClick={handleVisited} style={{padding:"10px",margin:"10px"}}>{visited ? "Visited" : "Not Visited"}</button>
            <button onClick={()=>handleFlags(country.flags.flags.png)} style={{padding:"10px",margin:"10px"}}>Add Visited Countries Flag</button>
        </div>
    );
};

export default country;