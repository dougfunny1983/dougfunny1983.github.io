import React from 'react';
import Dados from './data';
import CriarPokemon from './CriarPokemon';

class CriarListaPokemon extends React.Component {
    render () {
        return Dados.map(select => <CriarPokemon dados={select}/>);
    }
}

export default CriarListaPokemon;
