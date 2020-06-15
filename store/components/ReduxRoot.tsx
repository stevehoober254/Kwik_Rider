import React from 'react';
import {Provider} from 'react-redux';
import middleware from '../middleware';
import {createStore} from 'redux';
import reducers from '../reducers';

type Props = {
  children: React.ReactNode;
};

const store = createStore(reducers, {}, middleware);

export default function ReduxRoot({children}: Props) {
  return <Provider store={store}>{children}</Provider>;
}
