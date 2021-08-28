import * as React from 'react';
import styles from './DetalhesProjeto.module.scss';
import { IDetalhesProjetoProps } from './IDetalhesProjetoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { GetItemById } from '../../../services/SharePointRequests';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';
import { Item } from '@pnp/sp/items';


export default class DetalhesProjeto extends React.Component<IDetalhesProjetoProps, {}> {
  
      state = {
        Titulo: '',
        Contexto:'',
        Problema: '',
        Solucao:'',
        Imagem: ''
      }
  
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
   
  
    public render(): React.ReactElement<IDetalhesProjetoProps> {
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
            <section id="portfolio-details" className="portfolio-details">
              <div className="container">
        
                <div className="row gy-4">
                  <div className="col-lg-4">
                    <div className="portfolio-description">
                      <h2>Contexto</h2>
                      <p>{this.state.Contexto}</p>
                    </div>
                    <div className="portfolio-description-sub portfolio-description">
                      <h2>Problema</h2>
                      <p>{this.state.Problema}</p>
                    </div>
                    <div className="portfolio-description-sub portfolio-description">
                      <h2>Solução</h2>
                      <p>{this.state.Solucao}</p>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="portfolio-details-slider swiper-container">
                      <div className="swiper-wrapper align-items-center">
        
                        {/* <div className="swiper-slide">
                          <img src="https://image.slidesharecdn.com/linde2017-170710202256/95/my-linde-portfolio-1-638.jpg?cb=1500479620" alt=""/>
                        </div> */}
        
                        <div className="swiper-slide">
                          <img src={this.state.Imagem} alt=""/>
                        </div>
        
                        {/* <div className="swiper-slide">
                          <img src="../../../imgs/portfolio-3.jpg" alt=""/>
                        </div> */}
                      </div>
  
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
          </main>
        </>
      );
    }
  }
  
