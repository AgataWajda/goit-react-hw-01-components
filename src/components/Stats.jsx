import css from '../modules/Stats.module.css';

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
      {stats.map(stat => (
        <li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
};
