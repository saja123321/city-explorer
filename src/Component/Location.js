import React, { Component } from 'react'
import { Badge, Image } from 'react-bootstrap'
export class Location extends Component {
    render() {
        return (
            <div>
                <h1>Location Recuested</h1>
                <h6>
                    City Name <Badge bg="secondary"> {this.props.city} </Badge>
                </h6>
                <h6>
                    <Badge bg="secondary"> {this.props.lon} </Badge> / <Badge bg="secondary"> {this.props.lat} </Badge>
                    <h1 > {this.props.lon}  </h1>
                    {
                        console.log("Lon >" + this.props.lon)
                    }
                </h6>
            </div>
        )
    }
}

export default Location
