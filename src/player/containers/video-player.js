import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formatedTime from '../../utils/formatted'

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0
    }

    togglePlay = ev => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() {
        this.setState({
            pause: !this.props.autoplay
        })
    }

    handleLoadedMetaData = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    render() {
        return (
            <VideoPlayerLayout>
                <Title 
                    title="Esto es un video genial"
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={formatedTime(this.state.duration)}
                        currentTime={formatedTime(this.state.currentTime)}
                    />
                </Controls>
                <Video 
                    autoplay={this.props.autoplay}
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
                    pause={this.state.pause}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTimeUpdate={this.handleTimeUpdate}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;