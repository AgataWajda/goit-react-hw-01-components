import { Profile } from 'components/Profile';
import { Panel, Stats } from 'components/Stats';
import users from 'data/user.json';
import stats from 'data/data.json';

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
      <Panel title="Upload stats">
        <Stats stats={stats}></Stats>
      </Panel>
    </div>
  );
};
