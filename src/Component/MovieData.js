import React, { Component } from 'react'
import { Accordion, Image, Badge } from 'react-bootstrap'
import OneMovie from './OneMovie'
export class MovieData extends Component {
    render() {
        //(title, overview, average_votes, total_votes, image_url, released_on)
        return (
            <div className='row' style={{ margin: '20px' }}>
                {this.props.movieFromBack.map
                    (d =>
                        <OneMovie title={d.title} overview={d.overview} average_votes={d.average_votes} total_votes={d.total_votes} released_on={d.released_on} image_url={d.image_url} />
                    )
                }
            </div>
        )
    }
}
export default MovieData
