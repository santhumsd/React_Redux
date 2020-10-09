import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {rootreducer} from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';//for devtool acces in crome for redux store
import thunk from 'redux-thunk'

export const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)));
