import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return (
            <div>Loading ...</div>
        );
    }
    
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={video.snippet.title} className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h4>Title: {video.snippet.title} - Published By: {video.snippet.channelTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;

