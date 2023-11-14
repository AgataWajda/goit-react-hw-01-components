import css from '../modules/Friends.module.css';

export const FriendsList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => {
      let isOnline;

      if (friend.isOnline === true) {
        isOnline = css.statusOnline;
      } else if (friend.isOnline === false) {
        isOnline = css.statusOff;
      }
      return (
        <li className={css.item} key={friend.id}>
          <div className={isOnline}>{friend.isOnline}</div>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      );
    })}
  </ul>
);
