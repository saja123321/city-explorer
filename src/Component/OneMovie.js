import React, { Component } from 'react'
import { Accordion, Image, Badge } from 'react-bootstrap'
class OneMovie extends Component {
    render() {
        return (
            < div className="col">
                <Accordion>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header> {this.props.title} </Accordion.Header>
                        <Image style={{ width: '150px', height: '150px' }} thumbnail src={this.props.image_url || ' https://www.pngkit.com/png/detail/17-175707_reels-and-gtel-moviereelsandpopcorn-movie-reel-and-popcorn.png'} />
                        <Accordion.Body>
                            <div className="row">
                                <h6 className="col"> avg votes <Badge bg="secondary" className='m-2'> {this.props.average_votes} </Badge> </h6>
                                <h6 className="col"> released on <Badge bg="secondary" className='m-3' > {this.props.released_on}</Badge> </h6>
                                <h6 className="col"> total votes <Badge bg="secondary" className='m-2'> {this.props.total_votes} </Badge> </h6>
                            </div>
                            {this.props.overview}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    }
}
export default OneMovie
