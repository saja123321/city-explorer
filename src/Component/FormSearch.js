import axios from 'axios';
import React, { Component } from 'react'
import Location from './Location';
import MovieData from './MovieData';
import { Badge } from 'react-bootstrap';
import ErrorMsg from './ErrorMsg';
import Weather from './Weather';
import './input.css'
let loc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_City_Explorer}`
class FormSearch extends Component {
    state = {
        city: "",
        lat: "",
        lon: '',
        src: '',
        err: "",
        city_name: '',
        show: false,
        dataFromBack: '',
        movieFromBack: '',
        show2: true
    }
    getDataFromBack() {
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/weather?lat=${this.state.lat}&lon=${this.state.lon}&key=09b034f885484632854c033f1e72519d`)
            .then(res => {
                this.setState
                    ({
                        show: false,
                        dataFromBack: res.data
                    })
            }).catch(error =>
                this.setState({
                    show: true,
                })
            )
    }
    getDataMovie() {
        axios.get(`${process.env.REACT_APP_BACKEND_PORT}/movies?api_key=74b29308bb70138feec3e94fe656d2a2&query=${this.state.city}`)
            .then(res => {
                this.setState
                    ({
                        movieFromBack: res.data
                    })
                if (this.state.movieFromBack.length > 0) {
                    this.setState
                        ({ show2: true })
                } else {
                    this.setState
                        ({ show2: false })
                }
            }).catch(error =>
                this.setState({
                    show2: false,
                })
            )
    }
    showError = () => {
        console.log('hi from show error');
    }
    exploreCity = (e) => {
        e.preventDefault();
        let config = {
            method: "GET",
            baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_City_Explorer}&q=${this.state.city}`,
        }
        axios(config).then(res => {
            let cityObj = res.data[0];
            console.log(cityObj.address.name)
            this.setState({
                show: false,
                lat: cityObj.lat,
                lon: cityObj.lon,
                city_name: cityObj.address.name,
                src: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_City_Explorer}&center=${cityObj.lat},${cityObj.lon}`
            })
            console.log(this.state.city_name)
        }).then(res =>
            /// weather
            (this.getDataFromBack())
        ).then(
            ///movies
            this.getDataMovie()
        ).catch(error =>
            this.setState({
                errorMessage: error.toString(),
                show: true
            })
        );
    }
    cityName = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    render() {
        return (
            <center>
                <div>
                    <form onSubmit={this.exploreCity}>
                        <input className='SearchInput' type="text" id="cityName" name="search" placeholder="Search........." onChange={this.cityName} />
                        <input type="submit" name="search" value="Explore!" style=
                            {{
                                width: '200px',
                                boxSizing: "border-box",
                                border: "2px solid #ccc",
                                borderRadius: "4px",
                                fontSize: "16px",
                                backgroundColor: "white",
                                padding: "12px 20px 12px 40px",
                                margin: "12px 50px 42px 40px"
                            }} />
                    </form>
                    {
                        (!this.state.show) && this.state.lon && this.state.dataFromBack && <>
                            <div className='row' style={{ justifyContent: 'center' }}>
                                <Location src={`${loc}&center=${this.state.lat},${this.state.lon}`} city={this.state.city_name} lon={this.state.lon} lat={this.state.lat} />
                            </div>
                            <div className='row' style={{ margin: '20px' }}>
                                {this.state.show2 ?
                                    (
                                        <MovieData movieFromBack={this.state.movieFromBack} />
                                    ) :
                                    <h4>  <Badge bg="warning">'no data for movies</Badge></h4>
                                }
                            </div>
                            <div className='row' style={{ margin: '20px' }}>
                                <Weather cityName={this.state.city_name} dataFromBack={this.state.dataFromBack} />
                            </div>
                        </>}
                    {
                        (this.state.show) && <ErrorMsg />
                    }
                </div>
            </center >
        )
    }
}
export default FormSearch
