import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';



class WheatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pression = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;



        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temperature} color="orange" />
                </td>
                <td>
                    <Chart data={humidity} color="red" />
                </td>
                <td>
                    <Chart data={pression} color="blue" />
                </td>
            </tr >
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thread>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thread>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({ weather }) {
    return { weather };

}

//le connect permet de chopper les info de Reducer/index et de les coller dans le state du component
export default connect(mapStateToProps)(WheatherList)