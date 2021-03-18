import logo from '../../assets/logo.svg';

import * as S from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Header>
      

      <S.Content>
        <img src={logo} alt="dt money"/>
        <button 
          type="button" 
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </S.Content>
    </S.Header>
  );
}


