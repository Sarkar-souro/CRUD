import React, { useState } from 'react';
import { useCreatePostMutation } from '../services/post';

const CreatePost = () => {
  const [createPost] = useCreatePostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
