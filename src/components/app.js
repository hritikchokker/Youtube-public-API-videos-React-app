import React from 'react';
import SearchBar from './searchBar';
import youtube, { KEY } from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component{
    state = {videos: [],selectedVideo: null};
    componentDidMount(){
        this.onTermSubmit('hip hop tracks');
    }
    onTermSubmit = async term => {
        const response = await youtube.get('/search',{
            params: {
                part: 'snippet',
                q: term,
                maxResults: 5,
                key: KEY.url  
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(response,"response");
        
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
        console.log('from the app',video);
        
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default App;