import React, { Component } from 'react';

class PokedexCreator extends Component {
    render() {
        return <div className='pokemon'>
            <h1>{this.props.pokemon.name}</h1>
            <img src={this.props.pokemon.image} alt='foto do pokemon'/>
            <p>Type:{this.props.pokemon.type}</p>
            <p>Weight:{this.props.pokemon.averageWeight.value}{this.props.pokemon.averageWeight.measurementUnit}</p>
        </div>
    };
};

export default PokedexCreator;