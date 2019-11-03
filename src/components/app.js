import React from 'react';
import SearchBar from './searchBar';
import youtube, { KEY } from '../apis/youtube';
import VideoList from './videoList';

class App extends React.Component{
    state = {videos: []};
    onTermSubmit = async term => {
        const response = await youtube.get('/search',{
            params: {
                part: 'snippet',
                q: term,
                maxResults: 5,
                key: KEY.url  
            }
        })
        this.setState({videos: response.data.items})
        console.log(response,"response");
        
    }
    onVideoSelect = (video) =>{
        console.log('from the app',video);
        
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}
export default App;