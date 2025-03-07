import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMessages, createMessage } from '../services/api';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ThreadView = () => {
  const { threadId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages(threadId)
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err));
  }, [threadId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage(threadId, { content: newMessage })
      .then((res) => {
        setMessages([...messages, res.data]);
        setNewMessage('');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">Thread Discussion</h2>
      <div className="space-y-4">
        {messages.map((msg) => (
          <Card key={msg._id}>
            <CardContent>
              <p>{msg.content}</p>
              <small className="text-gray-500">
                {new Date(msg.createdAt).toLocaleString()}
              </small>
            </CardContent>
          </Card>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          required
          className="w-full"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ThreadView;
