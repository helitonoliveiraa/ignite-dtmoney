import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import totalImg from '../../assets/total.svg';

import { formatValue } from '../../utils/format';
import { useTransactions } from '../../hooks/useTransactions';

import * as S from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const { income, outcome, total } = transactions.reduce((accumulator, transaction) => {
    if (transaction.type === "income") {
      accumulator.income += transaction.amount;
      accumulator.total += transaction.amount;
    } else {
      accumulator.outcome += transaction.amount;
      accumulator.total -= transaction.amount;
    }

    return accumulator;
    
  }, {
    income: 0,
    outcome: 0,
    total: 0,
  });

  const summaryFormatted = {
    income: formatValue(income),
    outcome: formatValue(outcome),
    total: formatValue(total),
  }

  return (
    <S.Container>
      <S.Card>
        <header>
          <p>Entradas</p>

          <img src={arrowUpImg} alt="Arrow up"/>
        </header>
        <strong>{summaryFormatted.income}</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Saídas</p>

          <img src={arrowDownImg} alt="Arrow down"/>
        </header>
        <strong>{summaryFormatted.outcome}</strong>
      </S.Card>

      <S.Card className="hightlight-background">
        <header>
          <p>Entradas</p>

          <img src={totalImg} alt="Total"/>
        </header>
        <strong>{summaryFormatted.total}</strong>
      </S.Card>
    </S.Container>
  );
}