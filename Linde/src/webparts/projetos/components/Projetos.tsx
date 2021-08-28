import * as React from 'react';
import styles from './Projetos.module.scss';
import { IProjetosProps } from './IProjetosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { GetItemById } from '../../../services/SharePointRequests';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';
import $ from 'jquery';
import { Item } from '@pnp/sp/items';


export default class Projetos extends React.Component<IProjetosProps, {}> {

  state = {
    Titulo: '',
    Contexto:'',
    Problema: '',
    Solucao:'',
    Imagem: ''
  };

  //Busca id do parametro da url
  _getUrlParams = () => {
    let itemId, urlParams;
    urlParams = new URLSearchParams(window.location.search);
    itemId = urlParams.get('IdItem');
    return itemId;
  }

  componentDidMount = async () => {
    let idItem = this._getUrlParams();
    console.log(idItem);

    let itens: any = await GetItemById(this.props.list, parseInt(idItem));
    console.log(itens);

    this.setState({
      Titulo: itens.Title,
      Contexto: itens.Contexto,
      Problema: itens.Problema,
      Solucao: itens.Solucao,
      Imagem: itens.Imagem
    });


  }

  public render(): React.ReactElement<IProjetosProps> {
    return (
      <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <ol>
            <li><a href="https://fabricatheone.sharepoint.com/sites/LindeDigital">Home</a></li>
            <li>Detalhes do Projeto</li>
          </ol>
      <h2>{this.state.Titulo}</h2>

      </div>
    </section>

    
    <main id="main">  
      <section id="" className="portfolio-details">
        <div className="img">
          <img src={this.state.Imagem} alt=""/>
        </div>
        <div className="div1">
          <div className="portfolio-description">
            <h2>Contexto</h2>
            <p>{this.state.Contexto}</p>
          </div>
          <div className="portfolio-description">
            <h2>Problema</h2>
            <p>{this.state.Problema}</p>
          </div>
          <div className="portfolio-description">
            <h2>Solução</h2>
            <p>{this.state.Solucao}</p>
          </div>
        </div>
      </section>
    </main>
  </>

    );
  }
}
