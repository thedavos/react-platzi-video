import React from 'react';
import { Play, Pause } from '../../icons/components/figures'
import './play-pause.css'

const PlayPause = props => (
    <div className="PlayPause">
        {
            props.pause ?
            <button
                onClick={props.handleClick}
            >
                <Play size={25} color="white" />
            </button>
            :
            <button
                onClick={props.handleClick}
            >
                <Pause size={25} color="white" />
            </button>
        }
    </div>
)

export default PlayPause;