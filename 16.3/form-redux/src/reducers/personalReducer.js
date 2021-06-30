import { ADD_MORADIA } from "../actions/actionMoradia"
import { ADD_NAME } from "../actions/actionName"
import { ADD_CPF } from "../actions/actionCpf"
import { ADD_EMAIL } from "../actions/actionEmail"
import { ADD_ADDRESS } from "../actions/actionAddress"
import { ADD_CITY } from "../actions/actionCity"
import { ADD_STATE } from "../actions/actionState"

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  moradia: '',
}

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME: 
      return {name: action.name};
    case ADD_CPF: 
      return {cpf: action.cpf};
      case ADD_EMAIL: 
      return {email: action.email};
      case ADD_ADDRESS: 
      return {address: action.address};
      case ADD_CITY: 
      return {city: action.city};
      case ADD_MORADIA: 
      return {moradia: action.moradia};
      case ADD_STATE: 
      return {state: action.state};
    default: 
      return state;
  }
}

export default personalReducer;
