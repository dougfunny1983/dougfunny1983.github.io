import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome:'',
      Email:'',
      CPF:'',
      Endereço:'',
      Cidade:'',
      estadosBrasil:'',
      moradia:'',
      currículo:'',
      Cargo:'',
      DescrCargo:'',
    };
    mostrarInforma = () {
      this.state
    }
  }

  render() {
    return (
      <form>
        <fieldset>
          <div>
            <input type="text" name="Nome" placeholder="Nome" maxlength="40" />
          </div>
          <div>
            <input type="text" name="Email" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="CPF" placeholder="CPF" maxlength="" />
          </div>
          <div>
            <input type="text" name="Endereço" placeholder="Endereço" />
          </div>
          <div>
            <input
              type="text"
              name="Cidade"
              placeholder="Cidade"
              maxlength="28"
            />
          </div>
          <div>
            <select name="estadosBrasil">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
          <div>
            <input type="radio" name="moradia" value="Casa" label="Casa" />
            <input
              type="radio"
              name="moradia"
              value="Apartamento"
              label="Apartamento"
            />
          </div>
        </fieldset>

        <div>
          <fieldset>
            <textarea
              name="currículo"
              rows="5"
              cols="33"
              placeholder="Resumo do currículo"
              maxlength="1000"
            />
            <textarea
              name="Cargo"
              rows="5"
              cols="33"
              placeholder="Cargo"
              maxlength="40"
            />
            <textarea
              name="DescrCargo"
              rows="5"
              cols="33"
              placeholder="Descrição do cargo"
              maxlength="500"
            />
          </fieldset>
        </div>
        <input type='submit'  onClick={this.mostrarInforma}/>
      </form>
    );
  }
}

export default App;
