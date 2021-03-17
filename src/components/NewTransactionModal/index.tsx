import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import closeImg from '../../assets/close.svg';

import * as S from './styles';
import { TransactionsContext } from '../../context';

type NewTransactionModalProps = {
  onCloseNewTransactionModal: () => void;
  isOpenModal: boolean;
};

export function NewTransactionModal({ 
  isOpenModal, 
  onCloseNewTransactionModal 
}: NewTransactionModalProps) {
  const [type, setType] = useState('income');

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const { createTransaction } = useContext(TransactionsContext);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount: value,
      type,
      category,
    });

    setTitle('');
    setValue(0);
    setCategory('');
    setType('income');

    onCloseNewTransactionModal();


  }

  return (
    <Modal 
      isOpen={isOpenModal}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        className="react-modal-close"
        onClick={onCloseNewTransactionModal}
      >
        <img src={closeImg} alt="Close"/>
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input 
          type="number" 
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />
        

        <S.TransactionTypeContainer>
          <S.RadioBox 
            type="button"
            onClick={() => setType('income')}
            isActive={type === 'income'}
            activeColor="green"
          >
            <img src={arrowUpImg} alt="Income"/>
            Entrada
          </S.RadioBox >

          <S.RadioBox  
            type="button"
            className={type}
            onClick={() => setType('outcome')}
            isActive={type === 'outcome'}
            activeColor="red"
          >
            <img src={arrowDownImg} alt="Outcome"/>
            Saida
          </S.RadioBox >
        </S.TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}