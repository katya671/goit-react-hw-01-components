import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    {isOnline ? (
      <span className={css.status} style={{ color: '#67ac5a' }}>
        &#8226;
      </span>
    ) : (
      <span className={css.status} style={{ color: '#ed5d5a' }}>
        &#8226;
      </span>
    )}
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </>
);

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
