import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={imageUrl}/>
                </div>
                
                <div className="media-body">
                    <h4 className="media-heading">{video.snippet.title}</h4>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;