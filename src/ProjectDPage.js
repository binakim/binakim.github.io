import React, { Component } from 'react';

import ProjectNav from './ProjectNav';
import retina from 'retinajs';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

class ProjectD extends Component {
  componentDidMount() {
    retina();
  }

  render() {
    return <div className='project p4'>
      <div className='col-12'>
        <div className='fullWidthBoundHeightPanel gd4'>
          <div className='fullWidthYShift'>
            <img src='assets/p4.png' data-rjs="2"/>
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-5 projectTitle'>
        <div className='topPanelCategory'>UX Design</div>
        <div className='topPanelTitle'>Channel Hyundai Card</div>
        <div className='topPanelDescription'>The responsive video streaming website for branding and marketing of credit card companies.</div>
      </div>
    

    <div>
      <div className='sectionPanel col-12'>
          <div className='section textOnly'>INTRO</div>
          <div className='content'>
          The site produces videos that inspire users from various fields such as finance, art, music, and design to show the lifestyle that Hyundai Card pursues. I have planned site content display strategy, information architecture, video player UX design and content recommendation algorithm in this project.
          </div>
           <div className='subtitle entry content'>ROLE</div>
            <div className='content'>
              Lead UX Designer / Contents Strategy, Market Research, A/B Test, Admin Design, Video Recommend Algorithm, Wireframes, QA
            </div>
            <div className='subtitle entry content'>COMPANY </div>
            <div className='content'>
              Hyundai Card
            </div>          
            <div className='subtitle entry content'>PERIOD </div>
            <div className='content'>
              April 2015 – January 2016 
            </div> 
              <div className='subtitle entry content'>MISSION </div>
            <div className='content'>
              Create a responsive video streaming website
            </div>         
       </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>IDEA SKETCH</div>
          <div className='content'>
          Effective UX methods were considered in a number of ways in preparation for minimal content available in the early stages of the site opening. I considered a horizontal scrolling website and suggested tags.
          There were two UX strategy points.<br/>
          -How to effectively expose a few contents at the beginning of the site?<br/>
          -Navigation configuration to allow continuous viewing of content. 
          </div>
          <img className='fitImage' src='assets/p4/p4_1.jpg' data-rjs="2"/>
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
              <img className='fitImage' src='assets/p4/p4_2.jpg' data-rjs="2"/>
              <div className='subtitle entry content'>Channel List </div>
              <div className='content'>
              Designed a channel list page to view program introduction and episodes.
              </div>
              <img className='fitImage' src='assets/p4/p4_3.jpg' data-rjs="2"/>
            </div>
          </div>
        </div>
      </div>

      <div className='sectionPanel col-12'>
          <div className='section image'>USABILITY TEST</div>
          <div className='content'>
          For the usability test with first version mock-up, we checked the list below. <br/>
          -Video channel usage behavior <br/>
          -Device preference <br/>
          -Content expected from service concept <br/>
          -Site first impressions <br/>
          -Contents interest <br/>
          -Navigation usability <br/>
          </div>
          <div className='subtitle entry content'>Result</div>
          <div className='content'>
         User tests showed that most visitors felt that the site was new, but there were difficulties in using it, and the content was not very compelling.  Before launching the website, we decided to increase the number of various videos that users would see.
          </div>
          <img className='fitImage' src='assets/p4/p4_4.jpg' data-rjs="2"/>
      </div>


     <div className='sectionPanel col-12'>
          <div className='section image'>RECOMMEND ALGORITHM</div>
          <div className='content'>
          Since the videos are not updated often, the priority of exposure was alternately based on genre, theme, popularity, and latest video. For the personalized recommended video, we added criteria such as the video you watched and the video you liked.
          </div>
          <img className='fitImage' src='assets/p4/p4_5.jpg' data-rjs="2"/>
      </div>



     <div className='sectionPanel col-12'>
          <div className='section image'>COMMENTS OF EXPERTS</div>
          <div className='content'>
          We added a line of comments from experts to make the content more interesting and reliable.
          </div>
          <img className='fitImage' src='assets/p4/p4_6.jpg' data-rjs="2"/>
      </div>




     <div className='sectionPanel col-12'>
          <div className='section image'>QA</div>
          <div className='content'>
          We added a line of comments from experts to make the content more interesting and reliable.
          </div>
          <img className='fitImage' src='assets/p4/p4_7.jpg' data-rjs="2"/>
      </div>


        <div className='sectionPanel col-12'>
          <div className='fullPaddedSection grayBackground'>
            <div className='container-fluid text-left'>
              <div className='col-12'>
                <div className='section image'>FINAL DIESIGN</div>
                <div className='sectionImage'>
                  <img className='fitImage' src='assets/p4/p4_13.png' data-rjs="2"/>
                  </div>
                  <div className='subtitle entry content'>Home </div>
                  <div className='sectionImage'>
                  <img className='fitImage' src='assets/p4/p4_8.jpg' data-rjs="2"/>
                  </div>
                  <div className='subtitle entry content'>Channel Home </div>
                  <div className='sectionImage'>
                  <img className='fitImage' src='assets/p4/p4_9.jpg' data-rjs="2"/>
                  </div>
                  <div className='subtitle entry content'>Content</div>
                  <div className='sectionImage'>
                  <img className='fitImage' src='assets/p4/p4_10.jpg' data-rjs="2"/>
                  </div>
                  <div className='subtitle entry content'>Mobile</div>
                  <div className='sectionImage'>
                  <img className='fitImage' src='assets/p4/p4_12.png' data-rjs="2"/>
                </div>
              </div>
            </div>
          </div>
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
          href: '/project-e',
          className: 'gd5',
          imgUrl: 'assets/p5.png',
          category: 'Web Development / UI Design',
          title: 'Penguin Island'
        }}
      />
    </div>
  }
}

export default ProjectD;
