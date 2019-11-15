import React from 'react';
import Dados from './data';
import CriarPokemon from './CriarPokemon';
const interarPokemon = lista => lista.map(select => < CriarPokemon dados = { select }
    />)

    class CriarListaPokemon extends React.Component {
      render() {
        return interarPokemon(Dados);
      }
    }

    export default CriarListaPokemon;