import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

export default applyMiddleware(ReduxThunk, ReduxPromise);
