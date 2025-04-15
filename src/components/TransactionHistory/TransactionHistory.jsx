import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr className={css.headRow}>
          <th className={css.headData}>Type</th>
          <th className={css.headData}>Amount</th>
          <th className={css.headData}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.bodyRow}>
              <td className={css.bodyData}>{type}</td>
              <td className={css.bodyData}>{amount}</td>
              <td className={css.bodyData}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
