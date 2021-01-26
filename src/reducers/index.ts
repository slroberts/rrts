import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

// TypeScript makes sure we return a value of type Todo[]
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
