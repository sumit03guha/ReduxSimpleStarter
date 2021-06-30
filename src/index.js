import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import youtube from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_preview';
import Credential from './credentials';

const API_KEY = Credential.API;

class Yo extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            videos : [],
            selectedVideo : null
        }
        
        this.videoSearch('youtube');
    }

    videoSearch(term) {
        youtube({key : API_KEY , term : term} , (data) => {
            this.setState({
                videos : data,
                selectedVideo : data[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<Yo /> , document.querySelector(".container"));