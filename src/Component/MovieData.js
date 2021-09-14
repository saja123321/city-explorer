import React, { Component } from 'react'
import { Accordion, Image, Badge } from 'react-bootstrap'
export class MovieData extends Component {

    render() {

        //(title, overview, average_votes, total_votes, image_url, released_on)
        return (
            < div className="col-3">
                <Accordion>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header> {this.props.title} </Accordion.Header>

                        <Image thumbnail src={this.props.image_url || ' https://www.pngkit.com/png/detail/17-175707_reels-and-gtel-moviereelsandpopcorn-movie-reel-and-popcorn.png'} onError={this.handleImageError} />
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

export default MovieData
