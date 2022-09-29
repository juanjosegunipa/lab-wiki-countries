import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function CountryDetails() {

    const { id } = useParams();

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
            .then(res => res.json())
            .then(json => setCountryData(json))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className="col-7">
            {countryData ? (
                <div>
                    <h1>
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.altSpellings[0].toLowerCase()}.png`} alt='flags' />
                        </div>
                        <div>
                            {countryData.name.official}
                        </div>
                    </h1>
                    <table className='table'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%' }}>Capital</td>
                                <td>{countryData.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {countryData.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        <li style={{ listStyle: 'none' }}>
                                            {
                                                countryData.borders.map(singleBorder => {
                                                    return (
                                                        <div>
                                                            <Link to={`/${singleBorder}`} >{singleBorder}</Link>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td>
                                    {countryData.region}
                                </td>
                            </tr>
                            <tr>
                                <td>Sub Region</td>
                                <td>
                                    {countryData.subregion}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <h1>...loading</h1>
            )
            }
        </div >
    );
}

export default CountryDetails