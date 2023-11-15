import css from '../modules/Stats.module.css';
import PropTypes from 'prop-types';

export const Panel = ({ title, children }) => {
  const titleUpper = title.toUpperCase();
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{titleUpper}</h2>
      {children}
    </section>
  );
};
export const Stats = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(stat => {
        const { id, label, percentage } = stat;
        return (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
};

Stats.propTypes = {
  stats: PropTypes.array,
  stat: PropTypes.object,
  label: PropTypes.string,
  item: PropTypes.string,
  percentage: PropTypes.string,
};
