import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
const url = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=544a93cde99f3d00598f588e12fe7281'

class Lyrics extends Component {
    state= {
        track : {},
        lyrics:{}
    };

    componentDidMount(){
        axios.get(url)
        .then(res => {
            // console.log(res.data)
            this.setState({lyrics: res.data.message.body.lyrics});
            return axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=15953433&apikey=544a93cde99f3d00598f588e12fe7281'
            )
        })
        .then(res=>{
            this.setState({track: res.data.message.body.track});
        })
        .catch(err => console.log(err))
    }
    render() {
        const { track, lyrics }= this.state;
        console.log(track)
        if(track === undefined 
           || lyrics === undefined || 
           Object.keys(track).length === 0 || 
           Object.keys(lyrics).length === 0){
                return <Spinner />
        }else{
            return (
                <React.Fragment>
                    <Link  to="/" className="btn btn-dark btn-sm mb-4">
                        Go to Link
                    </Link>
                    <div className="card">
                    <h5 className="card-header">
                        {track.track_name} by {''}
                            <span className="text-secondary">{track.artist_name}</span>
                    </h5>
                </div>
                <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>

                </div>
                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>Album Id</strong>: {track.album_id}
                    </li>
                    <li className="list-group-item">
                        <strong>Album Id</strong>: {track.primary_genres.music_genre_list[0].music_genre
                                                    .music_genre_name}
                    </li>
                    <li className="list-group-item">
                        <strong>Explicit Words</strong>: 
                        {track.explicit === 0 ? 'No' : 'Yes'}
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date</strong>: 
                        <moment>{track.first_release_date}</moment>
                    </li>


                </ul>
                </React.Fragment>
               
            ) ;
            
        }
    }
}
export default Lyrics;