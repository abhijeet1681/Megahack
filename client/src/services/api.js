import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const fetchThreads = () => API.get('/threads');

export const createThread = (threadData) => API.post('/threads', threadData);

export const fetchMessages = (threadId) => API.get(`/threads/${threadId}/messages`);

export const createMessage = (threadId, messageData) => API.post(`/threads/${threadId}/messages`, messageData);
