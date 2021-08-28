import * as React from 'react';
//import styles from './Comercial.module.scss';
import { IComercialProps } from './IComercialProps';
import { escape } from '@microsoft/sp-lodash-subset';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';

export default class Comercial extends React.Component<IComercialProps, {}> {
  public render(): React.ReactElement<IComercialProps> {
    return (
      <section id="services" className="services-wp section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row separator">
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=3'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bxl-dribbble"></i></div> */}
                <h4>Projeto: Gestão Custos de Líquidos</h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </a>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=4'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-file"></i></div> */}
                <h4>Projeto: CMT - Contract Management Tool</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </a>
          </div>

          {/* <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-tachometer"></i></div> *
                <h4><a href="">Projeto 3</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </a>
          </div> */}

        </div>
        {/* <div className="row separator">
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bxl-dribbble"></i></div> *
                <h4><a href="">Projeto 4</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </a>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-file"></i></div> *
                <h4><a href="">Projeto 5</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </a>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-tachometer"></i></div> *
                <h4><a href="">Projeto 6</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </a>
          </div>

        </div> */}
        {/* <div className="row separator">
          <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bxl-dribbble"></i></div> *
                <h4><a href="">Projeto 7</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </a>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-file"></i></div> *
                <h4><a href="">Projeto 8</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </a>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <a href={'https://fabricatheone.sharepoint.com/sites/LindeDigital/SitePages/Detalhes.aspx?IdItem=1'}>
              <div className="icon-box">
                {/* <div className="icon"><i className="bx bx-tachometer"></i></div> *
                <h4><a href="">Projeto 9</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </a>
          </div>

        </div> */}
      </div>
    </section>
    );
  }
}
