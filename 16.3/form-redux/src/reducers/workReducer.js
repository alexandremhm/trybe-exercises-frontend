import { ADD_CURRICULO } from "../actions/actionCurriculo"
import { ADD_CARGO } from "../actions/actionCargo"
import { ADD_DESCRICAO } from "../actions/actionDescricao"

const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: ''
}

const workReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CURRICULO: 
      return {curriculo: action.curriculo};
    case ADD_CARGO: 
      return {cargo: action.cargo};
    case ADD_DESCRICAO: 
      return {descricao: action.descricao};
    default: 
      return state;
  }
}

export default workReducer;
