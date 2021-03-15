import logo from '../../assets/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <S.Content>
        <img src={logo} alt="dt money"/>
        <button type="button">Nova transação</button>
      </S.Content>
    </S.Header>
  );
}