import css from './Statistics.module.css';
import PropTypes from "prop-types";

const generateRandomColor = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
};

const Statistics = ({
  title,
    stats,
  
}) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id} style={{ backgroundColor: generateRandomColor() }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
    </ul>
</section>
);

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};