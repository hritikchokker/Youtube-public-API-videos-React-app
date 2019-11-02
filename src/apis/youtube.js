import axios from 'axios';

export const KEY = {
   url: 'AIzaSyC1lCvSvo5e0NBbIWhM9ZJStW9VRp8SWbs'
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});