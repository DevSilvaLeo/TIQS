import * as React from 'react';
import { IQuemSomosProps } from './IQuemSomosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Label } from '@fluentui/react';
import { GetItemFiltered } from '../../../services/SharePointRequests';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';

let UrlSite = window.location.protocol + "//" + window.location.hostname + "/" + window.location.pathname.split('/')[1] + "/" + window.location.pathname.split('/')[2];

export default class QuemSomos extends React.Component<IQuemSomosProps, {}> {
  public state = {
    bannerText: ''
  };

  public componentDidMount = async () => {
    console.log('QUEMSOMOS');

    let select = 'Title, Status';
    let filter = "Status eq 'Active'";
    let bannerConfig = await GetItemFiltered(this.props.list, select, filter);
    
    this.setState({ bannerText: bannerConfig[0].Title});

  }

  public render(): React.ReactElement<IQuemSomosProps> {
    return (
      <>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h3>
                  {/* {this.state.bannerText} */}
                  A <strong>Linde Digital Brasil</strong> tem como foco gerar valor para o negócio através do uso eficiente dos seus dados.
                  O time conta com uma equipe multidisciplinar, com habilidades em ferramentas modernas de Inteligência Artificial e Análise de dados.
                </h3>
              </div>
              <div className="col-lg-6">
                <img src={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/Banner.jpg'} className="img-fluid"/>
              </div>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="about" className="about sobre-nos">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Sobre nós</h2>
              </div>
              <div className="row content">
                <div className="col-lg-6">
                  <p>
                    O grupo é uma regionalização do time global <strong>Linde Digital,</strong> que conta com mais de <strong>50 mestres e doutores</strong> além de 
                    um vasto portifólio de projetos Digitais, baseado em cinco pilares principais:
                  </p>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0">
                  <ul>
                    <li><img className="icon-about" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/doublecheck.jpg"/> <strong>Automação,</strong> com a utilização de RPA para aumentar eficiência de processos reduzindo trabalhos manuais e repetitivos.</li>
                    <li><img className="icon-about" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/doublecheck.jpg"/> <strong>Experiência do cliente,</strong> com foco em iniciativas de relacionamento e encantamento. </li>
                    <li><img className="icon-about" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/doublecheck.jpg"/> <strong>Logística,</strong>  com projetos que otimizem a cadeia logística para redução de custos. </li>
                    <li><img className="icon-about" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/doublecheck.jpg"/> <strong>Operações avançadas,</strong>com foco em soluções para aumentar a confiabilidade e eficiência de equipmantos</li>
                    <li><img className="icon-about" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/doublecheck.jpg"/> <strong>Processos de Negócios,</strong> com o desenvolvimento de ferramentas avançadas de precificação, prospecção e gestão da carteira de clientes. </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
