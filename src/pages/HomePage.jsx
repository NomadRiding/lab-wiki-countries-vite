import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
const [countries, setCountries] = useState([]);

useEffect(() => {
    axios
    .get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
        //log not necessary, only to understand the structure
        console.log(response.data);

        setCountries(response.data);
    }) .catch((error) => {
        console.error("Error fetching the countries data: ", error);
    })
}, []);

return(
    <>
    <div className="container">

        <h1 className="page-title">WikiCountries: Your Guide to the World!</h1>
        {countries.map((countries) => (
            <Link 
            key={country.alpha3code}
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
            >
            <div>             
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                alt={`${country.name.common} flag`}
                className="country-flag-image" />
                {country.name.common}
            </div>
            </Link>
        ))}
    </div>
    </>
)
}

export default HomePage;
