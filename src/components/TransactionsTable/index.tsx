import * as S from './styles';

export function TransactionsTable() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="income">R$ 12.509,00</td>
            <td>Venda</td>
            <td>14/04/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de site</td>
            <td className="income">R$ 12.509,00</td>
            <td>Venda</td>
            <td>14/04/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de site</td>
            <td className="outcome"> - R$ 12.509,00</td>
            <td>Venda</td>
            <td>14/04/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}