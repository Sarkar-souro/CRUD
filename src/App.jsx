import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostsList from './components/PostsList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>CRUD App with RTK Redux Query</h1>
        <PostsList />
      </div>
    </Provider>
  );
};

export default App;
