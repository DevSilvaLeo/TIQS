import * as React from 'react';
//import styles from './AreaDeAtuacao.module.scss';
import { IAreaDeAtuacaoProps } from './IAreaDeAtuacaoProps';
import { escape } from '@microsoft/sp-lodash-subset';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';


export default class AreaDeAtuacao extends React.Component<IAreaDeAtuacaoProps, {}> {

  public state = {
    teste: ''
  };

  public componentDidMount = async () => {
    console.log('AREADEATUACAO');

  }

  public render(): React.ReactElement<IAreaDeAtuacaoProps> {
    return (
      <section id="services" className="services section-bg area-atuacao">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Áreas de Atuação</h2>
          <p>Nosso portifólio é dividido em três áreas de atuação, que englobam projetos multidisciplinares para apoiar apoiara companhia em soluões inovadoras.</p>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box" style={{backgroundImage: `url("https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/Cardbackoffice.jpg")`, backgroundSize: 'cover', opacity: 0.9 }}>
              {/* <h4>Backoffice</h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
              <p className='seeMore'><a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Backoffice.aspx'}>Ver mais</a></p>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box" style={{backgroundImage: `url("https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/CardNegocio.jpg")`, backgroundSize: 'cover', opacity: 0.9 }}>
              {/* <h4>Comercial</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p> */}
              <p className='seeMore'><a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Comercial.aspx'}>Ver mais</a></p>
              {/* <a className='seeMore' }>Ver Mais</a> */}
            </div>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box" style={{backgroundImage: `url("https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/CardOperacao.jpg")`, backgroundSize: 'cover', opacity: 0.9 }}>
              {/* <h4>Operação</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
              <p className='seeMore'><a href="https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Operacao.aspx">Ver mais</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}