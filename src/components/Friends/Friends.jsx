import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => {
      let online;
      const { isOnline, id, avatar, name } = friend;

      if (isOnline === true) {
        online = css.statusOnline;
      } else if (isOnline === false) {
        online = css.statusOff;
      }
      return (
        <li className={css.item} key={id}>
          <div className={online}></div>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      );
    })}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
