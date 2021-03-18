import { useTransactions } from '../../hooks/useTransactions';

import * as S from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'outcome' && '- '}
                {transaction.amountFormatted}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.dateFormatted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}