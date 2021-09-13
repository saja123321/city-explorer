import axios from 'axios';
import React, { Component } from 'react'
import Location from './Location';
import { Image } from 'react-bootstrap';
import ErrorMsg from './ErrorMsg';
import Weather from './Weather';
class FormSearch extends Component {
    state = {
        city: "",
        lat: "",
        lon: '',
        src: '',
        err: "",
        show: false,
        dataFromBack: ''
    }
    getDataFromBack() {
        axios.get(`http://${process.env.REACT_APP_BACKEND_PORT}/weather?lat=${this.state.lat}&lon=${this.state.lon}&searchQuery=${this.state.city}`)
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


    ///////////////////////

    longTask = (status) => new Promise((resolve, reject) => {
        let timer = Math.floor(2 * 1000);
        setTimeout(() => {
            this.getDataFromBack()
        }, timer);

    });

    //////////////////////////


    showError = () => {
        console.log('hi from show error');
    }
    exploreCity = (e) => {
        e.preventDefault();
        let config = {
            method: "GET",
            baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_City_Explorer}&q=${this.state.city}`,
        }

        fetch(config.baseURL)
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.setState({ totalReactPackages: data.total })
                axios(config).then(res => {
                    let cityObj = res.data[0];
                    this.setState({
                        show: false,
                        lat: cityObj.lat,
                        lon: cityObj.lon,
                        src: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_City_Explorer}&center=${cityObj.lat},${cityObj.lon}`,
                    })
                })


            }

            ).then(res =>
                (this.longTask())
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
                        <input type="text" id="cityName" name="search" placeholder="Search........." onChange={this.cityName} style={{
                            width: '300px',
                            boxSizing: "border-box",
                            border: "2px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            backgroundColor: "white",
                            padding: "12px 20px 12px 40px",
                            margin: "12px 50px 42px 40px"
                        }} />
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
                                <Location city={this.state.city} lon={this.state.lon} lat={this.state.lat} />
                                <Image style={{ width: '300px' }} className='col-3' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_City_Explorer}&center=${this.state.lat},${this.state.lon}`} fluid />
                            </div>
                            <div className='row'>  {this.state.dataFromBack.map(d => {
                                return <Weather cityName={this.state.city} valid_date={d.valid_date} description={d.description} />
                            }
                            )
                            }
                            </div>
                        </>
                    }
                    {
                        (this.state.show) && <ErrorMsg />
                    }

                </div>
            </center >
        )
    }
}

export default FormSearch
