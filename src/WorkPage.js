import React from 'react';
import { Link } from "react-router-dom";

import CenteredPage from './CenteredPage';
import WorkPanel from './WorkPanel';

import './WorkPage.scss';
import Highlight from './animation/highlight';

export default () => {
  return <div>
    <CenteredPage className='introduction'> 
        Hello, I'm <Highlight><span className='highlight animate'>Bina Kim</span></Highlight>.<br/>
        A <Highlight delay='300'><span className='highlight animate'>product designer</span></Highlight><br/>
        who designs <Highlight delay='600'><span className='highlight animate'>delightful</span></Highlight><br/>
        User Experience.<br/>
    </CenteredPage>
    <WorkPanel target='/project-a' backgroundStyle='gd1' imagePath='assets/p1.png'>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>I Was Here</div>
      <div className='workPanelDescription'>An application that helps travelers to easily record their trips and manage their travel budget from their credit card transactions.</div>
    </WorkPanel>
    <WorkPanel target='/project-b' backgroundStyle='gd2' imagePath='assets/p2.png' right={ true }>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>Social Table</div>
      <div className='workPanelDescription'>Social table is an app that provides an effective solution for reducing food waste.</div>
    </WorkPanel>
    <WorkPanel target='/project-c' backgroundStyle='gd3' imagePath='assets/p3.png'>
      <div className='workPanelCategory'>UI / UX Design</div>
      <div className='workPanelTitle'>Show Me ID</div>
      <div className='workPanelDescription'>Show me ID is an app that provides ID verification for the web and products</div>
    </WorkPanel>
    <WorkPanel target='/project-d' backgroundStyle='gd4' imagePath='assets/p4.png' right={ true } last={ true}>
      <div className='workPanelCategory'>UX Design</div>
      <div className='workPanelTitle'>Channel Hyundai Card</div>
      <div className='workPanelDescription'>A video streaming website for Hyundai Card Branding and Marketing group.</div>
    </WorkPanel>
  </div>
}
