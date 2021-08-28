import * as React from 'react';
//import styles from './Backoffice.module.scss';
import { IBackofficeProps } from './IBackofficeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { GetFiles, GetItemExpandedFiltered } from '../../../services/SharePointRequests';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';
import { upperCase } from 'lodash';

export default class Backoffice extends React.Component<IBackofficeProps, {}> {

  state = {
    card: []
  }

  private SetHTMLComponent = async (itens:any) => {

    return ('')
  }

  public componentDidMount = async () => {
    
    console.log(this.props.description);
    let select = 'Title, Contexto, Problema, Solucao, Area/Id, Area/Title';
    let filter = "Area.Title eq 'Backoffice'";
    let expand = 'Area';
    let allItens = await GetFiles(this.props.list);
    // let allItens = await GetItemExpandedFiltered(this.props.list, select, filter, expand);
    // let allItens = await GetAllItens(this.props.list);
    console.log(allItens)
    // let elementHTML = await this.SetHTMLComponent(allItens);

    // this.setState({
    //   card: elementHTML
    // })
  }

  public render(): React.ReactElement<IBackofficeProps> {
    return (
      <section id="services" className="services-wp section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row separator">
          {this.state.card}
          {/* <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bxl-dribbble"></i></div> 
                <h4>Projeto: ForecastR</h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                <p>Saiba Mais</p>
              </div>
            </a>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=2'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-file"></i></div> 
                <h4>Projeto: RTU Data Quality</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                <p>Saiba Mais</p>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
    );
  }
}
