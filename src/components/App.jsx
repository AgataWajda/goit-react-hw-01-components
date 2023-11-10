import { Profile } from 'components/Profile';
import users from 'data/user.json';

export const App = ({ children }) => {
  return (
    <div>
      <Profile
        avatar={users.user.avatar}
        username={users.user.username}
        tag={users.user.tag}
        location={users.user.location}
        followers={users.user.stats.followers}
        views={users.user.stats.views}
        likes={users.user.stats.likes}
      />
    </div>
  );
};
