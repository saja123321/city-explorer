import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
class ErrorMsg extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-danger col-3" role="alert">
                    invaled city name                 </div>
                <Image src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png" fluid />
            </div>
        )
    }
}

export default ErrorMsg
