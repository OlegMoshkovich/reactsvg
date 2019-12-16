import React, { useState } from 'react';
import styled from 'styled-components'
import { Section } from './components/section/section'
import { Hero } from './components/hero/hero'
import './App.css';
import gs1 from './img/gs/gs1.png'
import gs2 from './img/gs/gs2.png'
import gs3 from './img/gs/gs3.png'
import gs4 from './img/gs/gs1.png'
import gs5_hero from './img/gs/gs2.png'
import hcs1 from './img/hcs/image1.png'
import hcs2 from './img/hcs/image2.png'
import hcs3 from './img/hcs/image3.png'
import ribbon1 from './img/ribbon1.png'
import ribbon2 from './img/ribbon2.png'
import ribbon3 from './img/ribbon3.png'
import hcs_hero from './img/hcs_dashboard_1.png'
import ribbon_hero from './img/ribbon_dwg.png'
import emilie_hero from './img/emilie-01.png'



function App() {

  return (
    <div >
      <Hero color={'white'} title={'Girls Scouts / React Native Development'} img={gs5_hero} />
      <Section color={'white'} images={[gs1, gs2, gs3]}
        description1={'In 2015 I joined an exciting startup with the mission to increase daily safety on industrial worksites through application of data'}
        description2={' In the course of two years working for Human Condition Safety. I developed JS(React) analytical dashboards to visualize data obtained during product pilots and a simmulation engine created using Unity3D.'} />

      <Hero color={'white'} title={'HCS / ReactJS and Unity development'} img={hcs_hero} />
      <Section color={'white'} images={[hcs1, hcs2, hcs3]}
        description1={'In 2015 I joined an exciting startup with the mission to increase daily safety on industrial worksites through application of data'}
        description2={' In the course of two years working for Human Condition Safety. I developed JS(React) analytical dashboards to visualize data obtained during product pilots and a simmulation engine created using Unity3D.'} />

      <Hero color={'white'} title={'10 Design / CATIA Computational design'} img={ribbon_hero} />
      <Section color={'white'} images={[ribbon1, ribbon2, ribbon3]}
        description1={'In 2015 I joined an exciting startup with the mission to increase daily safety on industrial worksites through application of data'}
        description2={' In the course of two years working for Human Condition Safety. I developed JS(React) analytical dashboards to visualize data obtained during product pilots and a simmulation engine created using Unity3D.'} />
      <Hero color={'white'} title={'BCG.DV / ReactJs Redux Material'} img={emilie_hero} proportion={'50%'} />
      <Section color={'white'} images={[ribbon1, ribbon2, ribbon3]}
        description1={'In 2015 I joined an exciting startup with the mission to increase daily safety on industrial worksites through application of data'}
        description2={' In the course of two years working for Human Condition Safety. I developed JS(React) analytical dashboards to visualize data obtained during product pilots and a simmulation engine created using Unity3D.'} />


    </div>
  );
}

export default App;
