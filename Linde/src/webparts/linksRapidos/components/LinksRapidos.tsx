import * as React from 'react';
import styles from './LinksRapidos.module.scss';
import { ILinksRapidosProps } from './ILinksRapidosProps';
import { escape } from '@microsoft/sp-lodash-subset';

import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/style.css';
import '../../../css/dashboards.css';

export default class LinksRapidos extends React.Component<ILinksRapidosProps, {}> {
  public render(): React.ReactElement<ILinksRapidosProps> {
    return (
      <>
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              {/* <h2>Portfólio</h2> */}
              <p>Na <strong>White Martins,</strong>o time de Digital tem como objetivo principal promover a <strong>Transformação Digital</strong> da empresa, liderando ações de cultura
              e projetos que geram impacto no negócio através de ganhos em Produtividade, Confiabilidade e Crescimento. 
              Através da <strong>filosofia Ágil,</strong> garantimos entregas contínuas e rápidas, além de um baixo investimento inicial, com o payback de no máximo 2 anos.</p>
            
            </div>

            <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">Todos</li>
              <li data-filter=".filter-app">Comercial</li>
              <li data-filter=".filter-card">Operação</li>
              <li data-filter=".filter-web">Backoffice</li>
            </ul>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">



              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/projetos/CAR%203.0.jpg"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">CAR - Customer at Risk 3.0</p>
                  <p className="subtitle-normal">Atualizado em 01/01/0001</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> */}
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> */}
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/inf.png"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/avatar.png"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>Fontenelle</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/projetos/CAR%20Famex,%20Ipes%20e%20Gama.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">CAR - Customer at Risk Famex, Ipes e Gama</p>
                  <p className="subtitle-normal">Atualizado em 01/01/0001</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> */}
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> */}
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/inf.png"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/avatar.png"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>Fontenelle</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/projetos/GO%20Packaged.jpg"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">GO! Packaged - Gerador de Orçamentos Packaged</p>
                  <p className="subtitle-normal">Atualizado em 01/01/0001</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> */}
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> */}
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/inf.png"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/avatar.png"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>Fontenelle/Rodrigo</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> */}
                </div>
               </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/projetos/GO_Plus.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">GO Plus</p>
                  <p className="subtitle-normal">Atualizado em 01/01/0001</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> */}
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> */}
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/inf.png"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/avatar.png"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>Fontenelle</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/projetos/Receitas_acess%C3%B3rias.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">Receitas Acessórias</p>
                  <p className="subtitle-normal">Atualizado em 01/01/0001</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> 
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> */}
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/inf.png"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/icons/avatar.png"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>Fontenelle</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> */}
                </div>
              </div>

              {/*<div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/dashboard/image%202.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">DASHBOARD DE AVALIAÇÃO</p>
                  <p className="subtitle-normal">Atualizado em 19/7/2019</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> 
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> 
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icon-information.svg"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icones/model-user.svg"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>David Carvalho</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> 
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/dashboard/image%202.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">DASHBOARD DE AVALIAÇÃO</p>
                  <p className="subtitle-normal">Atualizado em 19/7/2019</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> 
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> 
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icon-information.svg"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icones/model-user.svg"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>David Carvalho</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> 
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/dashboard/image%202.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">DASHBOARD DE AVALIAÇÃO</p>
                  <p className="subtitle-normal">Atualizado em 19/7/2019</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> 
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> 
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icon-information.svg"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icones/model-user.svg"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>David Carvalho</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> 
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="content-image-card-normal">
                  
                  <img className="image-background-card" src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/dashboard/image%202.png"/>
                </div>
                <div className="content-card flex-center">
                  <p className="title-normal">DASHBOARD DE AVALIAÇÃO</p>
                  <p className="subtitle-normal">Atualizado em 19/7/2019</p>
                  {/* <p className="description-normal">
                    Breve descrição sobre o dashboard,
                  </p> 
                  {/* <p className="description-normal second-line">
                    seu segmento e a quem interessa.
                  </p> 
                  <div className="card-options flex-center">
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icon-information.svg"/>
                      <div className="text-options">
                        <span>Informações</span>
                        <span>adicionais</span>
                      </div>
                    </div>
                    <div className="flex-center">
                      <img className="circle-user-informarion" src="assets/img/dashboard/icones/model-user.svg"/>
                      <div className="text-options">
                        <span>Ponto focal</span>
                        <span><b>David Carvalho</b></span>
                      </div>
                    </div>
                  </div>
                  {/* <button className="btn btn-primary botao-radius botao-normal-card button-blocked-dashboard">
                    <a>Acessar Painel</a>
                  </button> 
                </div>
              </div> */}
              {/* ///////////////////////////////////////////////////////// */}

              {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-1.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-2.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-3.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-4.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-5.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-6.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-7.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-8.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img"><img src="https://fabricatheone.sharepoint.com/sites/LindeDigital/SiteAssets/linksRapidos/portfolio-9.jpg" className="img-fluid" alt=""/></div>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div> */}

            </div>
          </div>
        </section>
      </>
    );
  }
}
