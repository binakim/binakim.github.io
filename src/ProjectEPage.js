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
          <div className='section textOnly'>INTRO</div>
          <div className='content'>
            --intro goes here--
          </div>
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>OUR GOAL</div>
          <div className='content'>
          Antarctic penguins begin moving north until April each year.
          Due to climate change (global warming), the range of ice in Antarctic decreasing year by year and the penguin habitat is getting worse. 'Penguin Island' protects the penguin habitat by tracking the penguins' migration.
          </div>
          <img className='fitImage' src='assets/p5/p5_1.jpg' data-rjs="2"/>
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>TARGET USER</div>
          <div className='row'>
            <div className='entry col-12 col-md-6'>
              <div className='subtitle entry content'>Primary</div>
              <div className='entry content'>
              Who cares about the environment and loves animals.<br/>
              Age: Late 10~ Late 30 years0
              </div>
            </div>
            <div className='entry col-12 col-md-6'>
              <div className='subtitle entry content'>Secondary</div>
              <div className='entry content'>
              Who is interested in a penguin.<br/>
              Age: Elementary school students
              </div>
            </div>
          </div>          
          <img className='fitImage' src='assets/p5/p5_1.jpg' data-rjs="2"/>
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>COMPATIBILITY</div>
          <div className='row'>
            <div className='entry col-12 col-md-6'>
              <div className='subtitle entry content'>Device</div>
              <div className='entry content'>
              iPhone, Android phone / Wifi + Cellular
              </div>
              <div className='subtitle entry content'>Browser</div>
              <div className='entry content'>
              Google Chrome, Safari iOS
              </div>
            </div>
            <div className='entry col-12 col-md-6'>
              <div className='subtitle entry content'>Aspect ratio</div>
              <div className='entry content'>
      Primary: 16:9 ( Most common / iPhone 6,7,8 Plus, Android phones )<br/>
      Secondary: 19.5:9 ( iPhone X )
              </div>
              <div className='subtitle entry content'>Tracker Technology</div>
              <div className='entry content'>
              GPS+Wireless Access Pointss
              </div>
            </div>
          </div>          
          <img className='fitImage' src='assets/p5/p5_1.jpg' data-rjs="2"/>
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>TASKS</div>
          <div className='row'>
            <div className='entry col-12 col-md-6'>
              <div className='subtitle entry content'>1. The migratory routes</div>
              <div className='entry content'>
              Time: Year / Month/ Live (Optional)<br/> View: Full, Zoom
              </div>
              <div className='subtitle entry content'>2. Types of Penguins</div>
              <div className='entry content'>
              Habitat information<br/>
              Characteristic<br/>
              Amount of penguins<br/>
              Pictures
              </div>
            </div>
            <div className='entry col-12 col-md-6'>
              <div className='subtitle entry content'>3. Antarctic map changes due to warming</div>
              <div className='entry content'>By year</div>
              <div className='subtitle entry content'>4.Donation (Optional)</div>
              <div className='entry content'>
              </div>
            </div>
          </div>          
          <img className='fitImage' src='assets/p5/p5_1.jpg' data-rjs="2"/>
      </div>
      <div className='sectionPanel col-12'>
        <div className='fullPaddedSection grayBackground'>
          <div className='container-fluid text-left'>
            <div className='col-12'>
              <div className='section image'>DRAFT DESIGN</div>
              <div className='content'>
              After the first horizontal scrolling design, we proceeded with user testing.
              </div>
              <div className='subtitle entry content'>Main Home </div>
              <div className='content'>
              A horizontal scrolling site was designed to change the default grid according to the content importance.
              </div>
              <img className='fitImage' src='assets/p5/p5_2.jpg' data-rjs="2"/>
              <div className='subtitle entry content'>Channel List </div>
              <div className='content'>
              Designed a channel list page to view program introduction and episodes.
              </div>
              <img className='fitImage' src='assets/p5/p5_3.jpg' data-rjs="2"/>
            </div>
          </div>
        </div>
      </div>

      <div className='sectionPanel col-12'>
        <div className='section image'>IDEA SKETCH</div>
        <img className='fitImage' src='assets/p5/p5_15.png' data-rjs="2"/>
      </div>

       <div className='sectionPanel col-12'>
         <div className='fullPaddedSection grayBackground'>
           <div className='container-fluid text-left'>
             <div className='col-12'>
               <div className='section image'>INFORMATION ARCHITECTURE</div>
               <img className='fitImage' src='assets/p5/p5_14.png' data-rjs="2"/>
             </div>
           </div>
         </div>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>TASK FLOW</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>WIREFRAME</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>LOGO DESIGN</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>COLOR</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>FONT</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>TEXT TYPE</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>BUTTON &amp; INPUTS</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>TOOLTIP &amp; NOTIFICATION BAR &amp; ACCORDIAN TAB</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='section image'>FINAL DESIGN</div>
         <img className='fitImage' src='assets/p5/p5_11.jpg' data-rjs="2"/>
       </div>
       <div className='sectionPanel col-12'>
         <div className='fullPaddedSection conclusion'>
           <div className='container-fluid text-left'>
             <div className='col-12'>
               <div className='section textOnly'>CONCLUSION</div>
               <div className='content'>
                                The project was a first for a financial company to 
                                create an independent video streaming project. 
                                We conducted various UX tests on how to plan channels 
                                that fit the company's promotional direction and how to 
                                effectively expose them. In order to develop algorithms 
                                for effective content exposure, we designed algorithms by 
                                  collaborating with data analysis team. Due to the nature 
                                of video files, various tests were required for each browser 
                                and device, and UX design was also customized.
               </div>
             </div>
           </div>
         </div>
       </div>
       <ProjectNav 
          prev={{
            href: '/project-c',
            className: 'gd3',
            imgUrl: 'assets/p3.png',
            category: 'UI / UX Design',
            title: 'Show me ID'
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
