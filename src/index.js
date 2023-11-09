import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/Profile';
import users from 'data/user.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        avatar={users.user.avatar}
        username={users.user.username}
        tag={users.user.tag}
        location={users.user.location}
        followers={users.user.stats.followers}
        views={users.user.stats.views}
        likes={users.user.stats.likes}
      />
    </App>
  </React.StrictMode>
);
