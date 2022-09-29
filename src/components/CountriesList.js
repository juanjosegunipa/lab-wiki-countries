import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function CountriesList() {

    const [country, setCountry] = useState([])

    // const [filteredCountry, setFilteredCountry] = useState(country)

    // const newSearch = (event) => {
    //     const matchArray = country.filter(e => {
    //         return e.name.official.toLowerCase().includes(event.target.value.toLowerCase()) || e.alpha3Code.toLowerCase().includes(event.target.value.toLowerCase())
    //     })
    //     setFilteredCountry(matchArray)
    // }


    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(json => setCountry(json))
            .catch(err => console.log(err))
    }, [])

    return (

        <div className="col-5" style={{
            maxHeight: '90vh',
            overflow: 'scroll'
        }}>
            {/* <div style={{ marginBottom: '20px' }}>
                <h2>Search a country</h2>
                <input type='text' onChange={newSearch} />
            </div> */}
            <div className="list-group">
                {
                    country.map(singleCountry => {
                        return (
                            <div>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <Link className="list-group-item list-group-item-action" to={`/${singleCountry.alpha3Code}`}>
                                            <div>
                                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${singleCountry.alpha2Code.toLowerCase()}.png`} alt='flags' />
                                            </div>
                                            <div>
                                                {singleCountry.name.official}
                                            </div>
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        </div >
    );
}

export default CountriesList