import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
class Weather extends Component {
    render() {
        return (
            <div className='col' style={{ margin: "30px 20px" }}>
                <Card >
                    <Card.Title>{this.props.cityName}</Card.Title>
                    <center> <Card.Img style={{ width: '150px', height: '150px' }} src="https://www.upc.edu/prevencio/ca/shared/imatges/icones/exteriors.png" />
                    </center>
                    <Card.Body>
                        <Card.Text>
                            <strong>Date</strong> {this.props.valid_date}
                        </Card.Text>

                        <Card.Text>
                            <strong>Weather Description</strong> <br />
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Weather
