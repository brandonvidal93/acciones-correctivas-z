import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Footer';

import './Content.scss'

// IMPORTAR LOS COMPONENTES DE CADA PÁGINA
import {
  Cover, Page1, Page2,
  Page3, Page4, Page5,
  Page6, Page7, Page8,
  Page9, Page10, Page11,
  Page12 } from './pages/Pages';

class Content extends Component {

  state = {
    iPosYBike: 0,
    iPosXBike: 0
  }

  getPos = (i) => {
    console.log('recibo de Footer: ' + i);
    this.setState({
      iPosYBike: i,
      iPosXBike: i
    });
  }

  showContent = () => {
    const { iPosYBike, iPosXBike } = this.state;
    const { actualIndex, clickNavigation, data, goToPage, menuPosition, checkEnabledUnit, unitActual, updateActualUnit, unitFinal, enableUnit, endActivities, checkEndActivity, checkEndUnit } = this.props;
    switch (actualIndex) {
      case 0:
        // COVER
        return (
          <Cover dataPage = { data.coverPage } startCourse = { clickNavigation } />
        );

      case 1:
        // RECOMENDACIONES
        return (
          <Page1 dataPage = { data.page1 } goToPage = { goToPage } endActivities = { endActivities[1] } checkEndActivity = { checkEndActivity } />
        );

      case 2:
        // OBJETIVOS
        return (
          <Page2 dataPage = { data.page2 } goToPage = { goToPage } endActivities = { endActivities[2] } checkEndActivity = { checkEndActivity } />
        );

      case 3:
      // MENU
        return (
          <Page3
            dataPage = { data.page3 }
            goToPage = { goToPage }
            menuPosition = { menuPosition }
            unitActual = { unitActual }
            updateActualUnit = { updateActualUnit }
            unitFinal = { unitFinal }
            enableUnit = { enableUnit }
            iPosYBike = { iPosYBike }
            iPosXBike = { iPosXBike } />
        );

      case 4:
        // PAGINA INICIO
        return (
          <Page4 dataPage = { data.page4 } goToPage = { goToPage } endActivities = { endActivities[3] } checkEndActivity = { checkEndActivity } />
        );
      case 5:
        return (
          <Page5 dataPage = { data.page5 } goToPage = { goToPage } endActivities = { endActivities[4] } checkEndActivity = { checkEndActivity } />
        );
      case 6:
      // PAGINA FINAL
        return (
          <Page6 dataPage = { data.page6 } goToPage = { goToPage } endActivities = { endActivities[5] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );

      case 7:
      // PAGINA INICIO
      // PAGINA FINAL
        return (
          <Page7 dataPage = { data.page7 } goToPage = { goToPage } endActivities = { endActivities[6] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } />
        );

      case 8:
      // PAGINA INICIO
        return (
          <Page8 dataPage = { data.page8 } goToPage = { goToPage } endActivities = { endActivities[7] } checkEndActivity = { checkEndActivity } />
        );
      case 9:
        return (
          <Page9 dataPage = { data.page9 } goToPage = { goToPage } endActivities = { endActivities[8] } checkEndActivity = { checkEndActivity } />
        );
      case 10:
        return (
          <Page10 dataPage = { data.page10 } goToPage = { goToPage } endActivities = { endActivities[9] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } />
        );
      case 11:
      // PAGINA FINAL
        return (
          <Page11 dataPage = { data.page11 } goToPage = { goToPage } endActivities = { endActivities[10] } checkEndActivity = { checkEndActivity } checkEndUnit = { checkEndUnit } />
        );

      case 12:
      // PAGINA FINAL CURSO
        return (
          <Page12 dataPage = { data.page12 } goToPage = { goToPage } />
        );

      default:
        break;
    }
  }

  render() {
    const { actualIndex } = this.props;

    return (
      <div className='content'>
        <div className = { 'box-bg pAbs ' +  (actualIndex === 0 || actualIndex === 3 || actualIndex === 12 ? 'op-0': '')}>
          <img alt='Imagen' className={ 'background-1 pAbs '} src={ this.props.bgFooter.background[0].url }/>
          <img alt='Imagen' className={ 'bgStars pAbs blink-1 '} src={ this.props.bgFooter.bgStars }/>
          <img alt='Imagen' className={ 'bgPlaneta pAbs jumpWiggle-1 '} src={ this.props.bgFooter.planet1 }/>
          <img alt='Imagen' className={ 'bgCohete pAbs move-2 '} src={ this.props.bgFooter.rocket1 }/>
          <img alt='Imagen' className={ 'bgAstronner pAbs float-3 '} src={ this.props.bgFooter.astroneer1 }/>
        </div>

        { /* LLAMADO DE LA FUNCION QUE RETORNA EL CONTENT */ }
        { this.showContent() }

        {/* CARGA DEL COMPOMENTE FOOTER */}
        <Footer
          actualIndex = { this.props.actualIndex }
          clickNavigation = { this.props.clickNavigation }
          data = { this.props.data }
          imageFooter = { this.props.imageFooter }
          labelFooter = { this.props.labelFooter }
          bgFooter = { this.props.bgFooter }
          limitNavigation = { this.props.limitNavigation }
          showLastPage = { this.props.showLastPage }
          getPos = { this.getPos }
          endActivities = { this.props.endActivities }/>
      </div>
    );
  }
}

export default Content;
