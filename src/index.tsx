import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance mobile',
          type: 'income',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date('2021-02-11 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'outcome',
          category: 'venda',
          amount: 2000,
          createdAt: new Date('2021-02-13 09:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody).transactions;

      return schema.create('transactions', data)
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


