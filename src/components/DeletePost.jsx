// src/components/DeletePost.js
import React from 'react';
import { useDeletePostMutation } from '../services/post';

const DeletePost = ({ postId }) => {
  const [deletePost] = useDeletePostMutation();

  const handleDelete = async () => {
    await deletePost(postId);
  };

  return <button onClick={handleDelete}>Delete Post</button>;
};

export default DeletePost;
