import {combineReducers} from 'redux';
import iceCreamReducer from './iceCream/iceCreamReducer';
import cakereducer from './cake/CakeReducer';
import userReducer from './user/userReducer';

export const rootreducer=combineReducers({
                                  cake:cakereducer,
                                  iceCream:iceCreamReducer,
                                  users:userReducer
                                  })