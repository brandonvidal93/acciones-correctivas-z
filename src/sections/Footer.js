import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Footer extends Component {

  // ENVIO DE ID PARA NAVEGAR EL CURSO
  navigationCourse = e => {
    const { actualIndex } = this.props;
    e.preventDefault();
    if (e.target.id === 'btnNavLeft' || e.target.id === 'btnNavRight') {
      console.log(actualIndex);
      switch (actualIndex) {
        case 6:
        console.log('Holi 6 :)');
          this.props.clickNavigation(3);
          this.props.getPos(1);
          break;
        case 7:
          this.props.clickNavigation(3);
          this.props.getPos(2);
          break;
        default:
          this.props.clickNavigation(e.target.id);
          break;
      }
    } else {
      console.log('Ultima página');
    }
  }

  // MOSTRAR EL LOGO CUANDO NO ESTÁ EN LA PÁGINA 1
  showLogo = () => {
    const { actualIndex, imageFooter } = this.props;

    if (actualIndex !== 0) {
      return(
        <img
          alt='Imagen Corporativa'
          className='imageFooter'
          src={ imageFooter }/>
      );
    } else {
      return null;
    }
  }

  // MOSTRAR EL MENU DE NAVEGACIÓN Y BLOQUEAR LOS BOTONES DEPENDIENDO DE LA PAGINA
  showNavigation = () => {
    const { actualIndex, limitNavigation, data } = this.props;

    if (actualIndex !== 0 && actualIndex !== 3 && actualIndex !== 12) {
      return(
        <div className = 'buttonPannel c-1'>
          <button
            className = { 'buttonNav ' + (actualIndex === 1 || Object.values(data)[actualIndex].startUnit === true ? 'disabled': '') }
            id = 'btnNavLeft'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-left'] }
              size = '2x' />
          </button>

          <button
            className = { 'buttonNav ' + (actualIndex === limitNavigation || Object.values(data)[actualIndex].endCourse === true ? 'disabled ': '') }
            id = 'btnNavRight'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-right'] }
              size = '2x' />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  showLabel = () => {
    const { actualIndex, labelFooter } = this.props;

    if (actualIndex !== 0 && actualIndex !== 3 && actualIndex !== 12) {
      return(
        <p className = 'labelFooter fw-4 mL-2' dangerouslySetInnerHTML = {{ __html: labelFooter }}></p>
      );
    }
  }

  showWave = () => {
    const { actualIndex } = this.props;
    if (actualIndex !== 0 && actualIndex !== 12) {
      return(
        <div className = 'wave'></div>
      );
    }
  }

  render() {
    const { actualIndex, endActivities } = this.props;
    // console.log(endActivities);

    return (
      <div className = { (actualIndex === 0 || actualIndex === 3 || actualIndex === 12 ? 'footer-desc' : 'footer') + ' animated fadeIn d-Flex j-S aI-C' }>


        { this.showLogo() }
        { this.showLabel() }
        { this.showNavigation() }
        <div className = { 'restrict ' + ((endActivities[actualIndex]) === true ? 'dNone' : '') } />
        { /*OLAS DE FONDO { this.showWave() } */ }
      </div>
    );
  }
}

export default Footer;
