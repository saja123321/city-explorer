import React, { Component } from 'react'
import { Card, Badge } from 'react-bootstrap'
export class Location extends Component {
    render() {
        return (
            <div className='col-3' style={{ margin: "30px 20px" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>
                        <Badge bg="secondary"> {this.props.city} </Badge>
                    </Card.Title>
                    <Card.Body>

                        <Card.Text>
                            <Badge bg="secondary" className='m-2'> {this.props.lat} </Badge>
                            <Badge bg="secondary" className='m-2'> / </Badge>
                            <Badge bg="secondary" className='m-2'> {this.props.lon} </Badge>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default Location
