import React from 'react'
import './states.css';

const States = ({states}) => {
    return (
        <>
            <h2>Statewise COVID-19 Dashboard</h2>
            <div id="table-container">
                <table id="states">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {states.map((elem, ind) => {
                            return(
                                <tr key = {ind}>
                                    <td>{elem.state}</td>
                                    <td>{elem.confirmed}</td>
                                    <td>{elem.recovered}</td>
                                    <td>{elem.deaths}</td>
                                    <td>{elem.active}</td>
                                    <td>{elem.lastupdatedtime}</td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default States
