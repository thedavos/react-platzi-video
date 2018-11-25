import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import formatedTime from '../../utils/formatted'
import ProgressBar from '../components/progress-bar';
import { Spinner } from '../components/spinner';

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
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

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    formattedTimeDuration = () => {
        return formatedTime(this.state.duration)
    }

    formattedCurrentTime = () => {
        return formatedTime(this.state.currentTime)
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
                        duration={this.formattedTimeDuration()}
                        currentTime={this.formattedCurrentTime()}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video 
                    autoplay={this.props.autoplay}
                    src='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
                    pause={this.state.pause}
                    handleLoadedMetaData={this.handleLoadedMetaData}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;