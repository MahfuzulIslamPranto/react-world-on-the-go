import React, { use } from 'react';
import Country from '../Country/Country'
import '../Country/Country.css'


const Countries = ({countriesPromise}) => {
    const countriesP = use(countriesPromise);
    const countries = countriesP.countries;
    console.log(countries);
    return (
        <div>
            <h1>Countries of the world</h1>
            <p>Total numbers of countries: {countries.length}</p>
            <div className='grid'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;