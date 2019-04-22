import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID 9c7b6f4564260fc12407ee3a8b2e5d1a055b2df68a2f222f3453a63e8b2277dc'
  }
});