import React, { useState } from 'react';
import { useGetPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } from '../features/posts/postApi';
import { TextField, Button, List, ListItem, IconButton, ListItemText } from '@mui/material';
import { MdOutlineDelete } from 'react-icons/md';

const PostsList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const [newPost, setNewPost] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editingPostText, setEditingPostText] = useState('');

  const handleAddPost = async () => {
    await addPost({ title: newPost });
    setNewPost('');
  };

  const handleUpdatePost = async (id) => {
    await updatePost({ id, title: editingPostText });
    setEditingPostId(null);
    setEditingPostText('');
  };

  const handleDeletePost = async (id) => {
    await deletePost(id);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <TextField
        label="New Post"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <Button onClick={handleAddPost}>Add Post</Button>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            {editingPostId === post.id ? (
              <TextField
                value={editingPostText}
                onChange={(e) => setEditingPostText(e.target.value)}
                onBlur={() => handleUpdatePost(post.id)}
              />
            ) : (
              <ListItemText
                primary={post.title}
                onClick={() => {
                  setEditingPostId(post.id);
                  setEditingPostText(post.title);
                }}
              />
            )}
            <IconButton onClick={() => handleDeletePost(post.id)}>
              <MdOutlineDelete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PostsList;
