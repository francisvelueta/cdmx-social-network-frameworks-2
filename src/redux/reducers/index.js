import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  auth: authReducer,
  recipe: recipeReducer
})
