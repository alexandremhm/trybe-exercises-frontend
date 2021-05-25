import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar', 'limpar a casa', 'lavar pratos', 'passear com o cachorro']

class Component extends React.Component {
  render() {
    return (
      <div className="App">
        {compromissos.map((element) => <li>{element}</li>)}
      </div>
    )
  }
}

export default Component;
