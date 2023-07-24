import {createStore} from 'redux';
import rootReducer from '../Reducer/rootReducer';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState
        );
}