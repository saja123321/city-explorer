import React, { Component } from 'react'
import { Accordion, Image, Badge } from 'react-bootstrap'
export class Location extends Component {
    render() {
        return (
            <div className='col-6' style={{ margin: "30px auto" }}>

                <div >
                    <Accordion>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>  {this.props.city} </Accordion.Header>
                            <Accordion.Body>

                                <div className="row">
                                    <h4 className="col-5"> <Badge bg="secondary" className='m-2'> Lat </Badge> </h4>
                                    <Badge bg="secondary" className='m-3 col' > / </Badge>
                                    <h4 className="col-5">  <Badge bg="secondary" className='m-2'> Lon </Badge> </h4>
                                </div>
                                <div className="row">
                                    <h4 className="col-5"> <Badge bg="secondary" className='m-2'> {this.props.lat} </Badge> </h4>
                                    <Badge bg="secondary" className='m-3 col' > / </Badge>
                                    <h4 className="col-5">  <Badge bg="secondary" className='m-2'> {this.props.lon} </Badge> </h4>
                                </div>
                                <Image thumbnail src={this.props.src} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div >
        )
    }
}

export default Location
