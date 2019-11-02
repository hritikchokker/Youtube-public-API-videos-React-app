import React from 'react';
import SearchBar from './searchBar';
import youtube, { KEY } from '../apis/youtube';

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
        this.state({videos: response.data.items})
        console.log(response,"response");
        
    }
    render(){
        return (
        <div className="ui container">
         <SearchBar onFormSubmit={this.onTermSubmit} />
         </div>
        )
    }
}
export default App;