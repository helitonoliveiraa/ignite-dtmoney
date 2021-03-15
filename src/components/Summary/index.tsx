import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import totalImg from '../../assets/total.svg';

import * as S from './styles';

export function Summary() {
  return (
    <S.Container>
      <S.Card>
        <header>
          <p>Entradas</p>

          <img src={arrowUpImg} alt="Arrow up"/>
        </header>
        <strong>R$ <span>28.487</span>,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Saídas</p>

          <img src={arrowDownImg} alt="Arrow down"/>
        </header>
        <strong>R$ <span>2.487</span>,00</strong>
      </S.Card>

      <S.Card className="hightlight-background">
        <header>
          <p>Entradas</p>

          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$ <span>26.487</span>,00</strong>
      </S.Card>
    </S.Container>
  );
}