import * as React from 'react';
import { IWhoWeAreProps } from './IWhoWeAreProps';
import { escape } from '@microsoft/sp-lodash-subset';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

export default class WhoWeAre extends React.Component < IWhoWeAreProps, {} > {
  public render(): React.ReactElement<IWhoWeAreProps> {
    return(

        <div id="hero" className="d-flex align-items-center"  >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center" >
                <h3>
                  A <strong>Linde Digital Brasil</strong> tem como foco gerar valor para o negócio através do uso eficiente dos seus dados. 
                  O time hoje conta com uma equipe multidisciplinar, com habilidades em ferramentas modernas de Inteligência Artificial e Análise de dados.
                </h3>
                <h3>
                  O grupo é uma regionalização do time global <strong>Linde Digital,</strong> que conta com mais de <strong>50 mestres e doutores</strong> além de 
                  um vasto portifólio de projetos Digitais, baseado em cinco pilares principais:
                </h3>
              </div>
              <div className="col-lg-6">
                <img src={'https://www.netfarma.pt/wp-content/uploads/Linde-Logo.jpg'} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}
