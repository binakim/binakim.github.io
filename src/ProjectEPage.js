import React, { Component } from 'react';

import ProjectNav from './ProjectNav';
import retina from 'retinajs';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

class ProjectE extends Component {
  componentDidMount() {
    retina();
  }

  render() {
    return <div className='project p5'>
      <div className='col-12'>
        <div className='fullWidthBoundHeightPanel gd5'>
          <div className='fullWidthYShift'>
            <img src='assets/p5.png' data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-5 projectTitle'>
        <div className='topPanelCategory'>Web Development / UI Design</div>
        <div className='topPanelTitle'>Penguin Island</div>
        <div className='topPanelDescription'>
          Service to see migration routes of penguins living in Antarctica changed by global warming
        </div>
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>OUR GOAL</div>
          <div className='content'>
          Antarctic penguins begin moving north until April each year.
          Due to climate change (global warming), the range of ice in Antarctic decreasing year by year and the penguin habitat is getting worse. 'Penguin Island' protects the penguin habitat by tracking the penguins' migration.
          </div>
        <div className='projectButton'>
          <a href="http://binakimuxdesign.com/aau/penguinisland/index.html" target="new">
          <button type='button' className='btn'>Project Link</button>
          </a>
        </div>

      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>TARGET USER</div>
          <div className='row'>
            <div className='entry col-12 col-md-6'>
              <div className='sectionSubtitle'>Primary</div>
              <div className='entry content'>
              Who cares about the environment and loves animals.<br/>
              Age: Late 10~ Late 30 years0
              </div>
            </div>
            <div className='entry col-12 col-md-6'>
              <div className='sectionSubtitle'>Secondary</div>
              <div className='entry content'>
              Who is interested in a penguin.<br/>
              Age: Elementary school students
              </div>
            </div>
          </div>          
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>COMPATIBILITY</div>
          <div className='row'>
            <div className='entry col-12 col-md-6'>
              <div className="sectionSubtitle">Device</div>
              <div className='entry content'>
              iPhone, Android phone / Wifi + Cellular
              </div>
              <div className="sectionSubtitle">Browser</div>
              <div className='entry content'>
              Google Chrome, Safari iOS
              </div>
            </div>
            <div className='entry col-12 col-md-6'>
              <div className="sectionSubtitle">Aspect ratio</div>
              <div className='entry content'>
      Primary: 16:9 ( Most common / iPhone 6,7,8 Plus, Android phones )<br/>
      Secondary: 19.5:9 ( iPhone X )
              </div>
              <div className="sectionSubtitle">Tracker Technology</div>
              <div className='entry content'>
              GPS+Wireless Access Pointss
              </div>
            </div>
          </div>          
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>TASKS</div>
          <div className='row'>
            <div className='entry col-12 col-md-6'>
              <div className="sectionSubtitle">1. The migratory routes</div>
              <div className='entry content'>
              Time: Year / Month/ Live (Optional)<br/> View: Full, Zoom
              </div>
              <div className="sectionSubtitle">2. Types of Penguins</div>
              <div className='entry content'>
              Habitat information<br/>
              Characteristic<br/>
              Amount of penguins<br/>
              Pictures
              </div>
            </div>
            <div className='entry col-12 col-md-6'>
              <div className="sectionSubtitle">3. Antarctic map changes due to warming</div>
              <div className='entry content'>By year</div>
              <div className="sectionSubtitle">4.Donation (Optional)</div>
              <div className='entry content'>
              </div>
            </div>
          </div>          
      </div>

      <div className='sectionPanel col-12'>
        <div className='section image'>IDEA SKETCH</div>
        <img className='fitImage' src='assets/p5/p5_0.jpg' data-rjs="2"/>
      </div>

       <div className='sectionPanel col-12'>
         <div className='fullPaddedSection grayBackground'>
           <div className='container-fluid text-left'>
             <div className='col-12'>
               <div className='section image'>INFORMATION ARCHITECTURE</div>
               <div className='midPadding'>
                 <img className='fitImage' src='assets/p5/p5_1.png' data-rjs="2"/>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>TASK FLOW</div>
         <div className='midPadding'>
           <img className='fitImage' src='assets/p5/p5_2.png' data-rjs="2"/>
         </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='fullPaddedSection grayBackground'>
           <div className='container-fluid text-left'>
             <div className='col-12'>
               <div className='section image'>WIREFRAME</div>
               <div className='midPadding'>
                 <img className='fitImage title content' src='assets/p5/p5_3.png' data-rjs="2"/>
                 <img className='fitImage title content' src='assets/p5/p5_3_1.png' data-rjs="2"/>
                 <img className='fitImage title content' src='assets/p5/p5_3_2.png' data-rjs="2"/>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>LOGO DESIGN</div>
         <div className='midPadding'>
           <img className='fitImage' src='assets/p5/p5_4.jpg' data-rjs="2"/>
         </div>
       </div>

       <div className='sectionPanel col-12'>
          <div className='section image'>COLOR</div>
          <div className='midPadding'>
            <img className='fitImage' src='assets/p5/p5_5.jpg' data-rjs="2"/>
          </div>
       </div>

       <div className='sectionPanel col-12'>
         <div className='fullPaddedSection grayBackground'>
           <div className='container-fluid text-left'>
             <div className='col-12'>
             <div className='section image'>FONT</div>
             <div className='midPadding'>
               <img className='fitImage' src='assets/p5/p5_6.png' data-rjs="2"/>
             </div>               
             </div>
           </div>
         </div>
       </div>
       <div className='sectionPanel col-12'>
               <div className='section image'>TEXT TYPE</div>
               <div className='midPadding'>
                 <img className='fitImage' src='assets/p5/p5_7.jpg' data-rjs="2"/>
               </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>BUTTON &amp; INPUTS</div>
         <div className='midPadding'>
           <img className='fitImage' src='assets/p5/p5_8.png' data-rjs="2"/>
         </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='fullPaddedSection grayBackground'>
           <div className='container-fluid text-left'>
             <div className='col-12'>
               <div className='section image'>TOOLTIP &amp; NOTIFICATION BAR &amp; ACCORDIAN TAB</div>
               <div className='midPadding'>
                 <img className='fitImage' src='assets/p5/p5_9.png' data-rjs="2"/>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>FINAL DESIGN</div>
         <img className='fitImage' src='assets/p5/p5_10.png' data-rjs="2"/>
         <img className='fitImage' src='assets/p5/p5_11.png' data-rjs="2"/>
       </div>
       <ProjectNav 
          prev={{
            href: '/project-d',
            className: 'gd4',
            imgUrl: 'assets/p4.png',
            category: 'UX Design',
            title: 'Channel Hyundai Card'
          }}
          next={{
            href: '/project-a',
            className: 'gd1',
            imgUrl: 'assets/p1.png',
            category: 'UI / UX Design',
            title: 'I was here'
          }}
       />
     </div>
  }
}

export default ProjectE;
