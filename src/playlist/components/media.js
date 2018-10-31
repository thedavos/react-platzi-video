import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
    render() {
        const { title, author, image, alt} = this.props
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img
                        className="Media-image"
                        src={ image } 
                        alt={ alt }
                        width={260}
                        height={160} 
                    />
                    <h3 className="Media-title"> { title } </h3>
                    <p className="Media-author"> { author } </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
}

export default Media