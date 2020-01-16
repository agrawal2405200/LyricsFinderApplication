import React from 'react'
import { Link } from 'react-router-dom'
const Track = (props) =>{
    const { track } = props ;
// console.log('hi')    
    console.log(track)
    return (
        <div className = "col-md-6">
            <div className="col mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <br/>
                     <p className="card-text">
                         <strong>Track:</strong>{track.track_name}
                         <br/>
                         <strong>Album:</strong>{track.album_name}
                         <br/>
                     </p>
                     <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                        View Lyrics
                     </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Track;
 