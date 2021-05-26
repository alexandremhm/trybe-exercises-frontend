import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon
    return (
      <div>
        <p>{name}</p>
        <p>Type: {type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
        <img src={image} alt='Pokemon'/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
}

export default Pokemon;
