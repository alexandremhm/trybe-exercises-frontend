import React, { Component } from 'react'
import { connect } from 'react-redux';
import addName from '../actions/actionName'

class PersonalData extends Component {
  render() {
    const arrayEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    return(
      <div>
        <fieldset className='form'>
          <label htmlFor="name">Nome:
            <input type="text" name='name' value={this.state.name.toUpperCase()} onChange={this.handleInput} maxLength='40' required />
          </label>
          <label htmlFor="email">Email:
            <input type="email" name='email' value={this.state.email} onChange={this.handleInput} maxLength='50' required />
          </label>
          <label htmlFor="cpf">CPF:
            <input type="text" name='cpf' value={this.state.cpf} onChange={this.handleInput} maxLength='11' required />
          </label>
          <label htmlFor="address">Endereço:
            <input type="text" name='address' value={this.state.address.replace(/[^a-zA-Z0-9 ]/g, "")} onChange={this.handleInput} maxLength='200' required />
          </label>
          <label htmlFor="city">Cidade:
            <input type="text" name='city' value={this.state.city} onChange={this.handleInput} maxLength='28' required />
          </label>
          <label htmlFor="state">Estado:
            <select name="state" id="state" value={this.state.state} onChange={this.handleInput}>
              {arrayEstados.map((estado) => <option value={estado}>{estado}</option>)}
            </select>
          </label>
          <label htmlFor="moradia">
            <input type="radio" name='moradia' value='casa' onChange={this.handleInput} required />Casa
            <input type="radio" name='moradia' value='apartamento' onChange={this.handleInput} required />Apartamento
          </label>
        </fieldset>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  name: (name) => dispatch(addName(name))
})

export default connect(null, mapDispatchToProps)(PersonalData);
