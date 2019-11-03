import {combineReducers} from 'redux';

const songReducers = () =>{
    return [
        {title: 'Forgot About Dre', Duration : '4:23'},
        { title: 'Still Dre',Duration: '3:43' },
        { title: 'I can' , Duration: '4:00' },
        { title: 'Not Afraid', Duration: '3:11' }
    ];

};
const selectedSongReducer = (selectedSong = null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

};

export default combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer
});