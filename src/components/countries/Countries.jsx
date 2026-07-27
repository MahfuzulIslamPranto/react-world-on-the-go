import React, { use, useState } from 'react';
import Country from '../Country/Country'
import '../Country/Country.css'


const Countries = ({countriesPromise}) => {

    const [visitedFlags,setVisitedFlags] = useState([]);
    const handleFlags = (flags) =>{
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }

    const [visitedCountry,setVisitedCountry] = useState([]);
    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountry,country];
        setVisitedCountry(newVisitedCountries);
    }
    const countriesP = use(countriesPromise);
    const countries = countriesP.countries;

    console.log(countries);
    return (
        <div>
            <h1>Countries of the world</h1>
            <p>Total numbers of countries: {countries.length}</p>
            <p>Country visited: {visitedCountry.length}</p>
            <ol>
                {
                    visitedCountry.map(country => <li key={country.ccn3.ccn3}>{country.name.common} </li>)
                }
            </ol>
            <p>Visited Countries Flag: {visitedFlags.length}</p>
            <div className='btnn' className='grid'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag} alt="" />)
                }
            </div>
            <div className='grid'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleFlags={handleFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;