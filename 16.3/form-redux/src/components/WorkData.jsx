import React, { Component } from 'react'

class WorkData extends Component {
  render() {
    return (
      <div>
        <fieldset className='form'>
          <label htmlFor="curriculo">Currículo:
            <textarea name="curriculo" id="curriculo" value={this.state.curriculo} onChange={this.handleInput} cols="30" rows="10" maxLength='1000'></textarea>
          </label>
          <label htmlFor="cargo">Cargo:
            <input type="text" name='cargo' value={this.state.cargo} onChange={this.handleInput} maxLength='40' required />
          </label>
          <label htmlFor="descricao">Descrição do cargo:
            <textarea name="descricao" id="descricao" value={this.state.descricao} onChange={this.handleInput} cols="30" rows="10" maxLength='500'></textarea>
          </label>
        </fieldset>
      </div>
    )
  }
}

export default WorkData;
