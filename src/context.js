import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();

const url = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=544a93cde99f3d00598f588e12fe7281'
export class Provider extends Component {
    state = {
        track_lists : [],
        heading:'Top 10 tracks'
    };


componentDidMount(){
        axios.get(url)
        .then(res => {
            console.log(res.data)
            this.setState({track_list: res.data.message.body.track_list});
        })
        .catch(err => console.log(err))
    }
    render() {
        console.log("From context")
        console.log(this.state.track_list)
        return (
            <div>
               <Context.Provider  value={this.state}>
                   { this.props.children }
                   </Context.Provider> 
            </div>
        )
    }
}

export const Consumer = Context.Consumer;