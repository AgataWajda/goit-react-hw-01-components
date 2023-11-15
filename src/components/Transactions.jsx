import css from '../modules/Transations.module.css';
import PropTypes from 'prop-types';

export const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionsHistory}>
      <thead>
        <tr className={css.titles}>
          <th className={css.titleItem}>Type</th>
          <th className={css.titleItem}>Amount</th>
          <th className={css.titleItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;

          return (
            <tr key={id} className={css.row}>
              <td className={css.tableItem}>{type}</td>
              <td className={css.tableItem}>{amount}</td>
              <td className={css.tableItem}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array,
  transaction: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
