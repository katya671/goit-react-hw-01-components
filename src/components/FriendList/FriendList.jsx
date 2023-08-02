import css from './FriendList.module.css';
import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.item} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
