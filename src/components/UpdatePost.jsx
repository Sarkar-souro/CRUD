import React, { useState } from 'react';
import { useUpdatePostMutation } from '../services/post';

const UpdatePost = ({ postId }) => {
  const [updatePost] = useUpdatePostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost({ id: postId, title, body });
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
      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePost;
