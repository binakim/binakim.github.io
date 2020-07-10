import React from 'react';

import './AboutPage.scss';

export default () => {
  return <div className='aboutPage'>
    <div className='profile'>
      <div className='profilePhoto col-12 col-md-5'>
        <img src='assets/about1.jpg' data-rjs="2" />
      </div>
      <div className='hide_mobile col-md-1' />
      <div className='statementSection col-12 col-md-6'>
        <div className='d-flex flex-grow-1 align-items-center justify-content-center justify-content-md-start'>
          <div className='statement'>
            <img className='quote-l' src='assets/Quotation1.png' data-rjs='2'/>I'm not just a <span className='highlight'>problem-solving</span> designer. I can <span className='highlight'>create</span> something that <span className='highlight'>inspires people</span> with new <span className='highlight'>experiences</span>.<img src='assets/Quotation2.png' className='quote-r' data-rjs='2'/>
          </div>
        </div>
        <div className='resumeButton'>
          <a href="https://drive.google.com/file/d/18Pl8j0UgJQlsjnyiXyFTVZqYHCx0xduz/view?usp=sharing" target="new">
          <button type='button' className='btn'>RESUME &gt;</button>
          </a>
        </div>
      </div>
    </div>
    <div className='bio'>
      <div className='col-12 col-lg-6'>
        <div className='sectionCol'>
          <span className='section'>EXPERIENCE</span>
          <div className='exp'>
            <div className='title'><span className='company'>Goodtime</span> Senior Product Designer</div>
            <div className='period'>February 2019 - present</div>
            <div className='description'>Designed an interview scheduling platform through user research and data analysis.<br />
Conducted user testing and shadowing sessions to understand the recruiting process and develop empathy for recruiters and coordinators.<br />
Shipped UX improvements that are accessible, intuitive, and user-centered through a quick and iterative development cycle, working closely with engineers.<br />
Redesigned the core process such as company onboarding, candidate invitation, scheduling interview, and interviewer training.</div><br />
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Hyundai Card</span> Senior Product Designer</div>
            <div className='period'>July 2014 - May 2017</div>
            <div className='description'>Worked on branding and fintech products at a credit card company.<br />
Built strategies and wireframes for company branding products,
launched a video streaming application, and a web app for co-working
space.<br />
Redesigned the credit card website, aligning it with business priorities
and improving user accessibility. Data-driven decisions based on site
analytics, focused interview, and moderated usability testing, resulted
in 7% increase in sign up for credit card applications.</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Korea Telecom</span> Senior Product Designer</div>
            <div className='period'>April 2012 - June 2014</div>
            <div className='description'>Worked on a music streaming platform and camera application.<br/>
Directed a photo app as a lead product designer within an IOS team.<br/>
Launched a camera application with various filters and features. 2nd
ranked in China Appstore resulting in 140% download increase with
over 20 million downloads total. Managed a music streaming platform
improving UX design and creating new business models.</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>SK Communications</span> Product Designer</div>
            <div className='period'>January 2006 - December 2010</div>
            <div className='description'>Worked on a social network platform with 27 million+ users (the most
popular SNS in South Korea in 2014).<br/>
Managed photo album product for 2 years and designed a new photo
editor interface with filters, stickers, resizing features which improved
photo uploads by 15% and reduced data storage costs by 10%.<br/>
Launched multiple product renewals driven by user data analytics,
customer voices, user testing, and user interviews.</div>
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-6'>
        <div className='sectionCol'>
          <span className='section'>EDUCATION</span>
          <div className='exp'>
            <div className='title'><span className='company'>Academy of Art University</span> San Francisco, CA</div>
            <div className='description'>Master of Arts / Web Design & New Media (Fall 2018)</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Hanyang University</span> Seoul, Korea</div>
            <div className='description'>Bachelor of Fine Arts / Visual Design (Spring 2006)</div>
          </div>
        </div>
        <div className='sectionCol'>
          <span className='section'>SKILLS</span>
          <div className='exp'>
            <div className='title'><span className='company'>Tools</span></div>
            <div className='description'>Figma, Sketch, Adobe XD/Illustrator/Photoshop/After Effect, Google Analytics, Power Point, Excel</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Research Methods</span></div>
            <div className='description'>Web Data Analysis, CRM Analysis, Heuristic Evaluation,User Interview, A/B Testing</div>
          </div>
          <div className='exp'>
            <div className='title'><span className='company'>Design Methods</span></div>
            <div className='description'>Product Concept, UX Strategy, Story Board, Wireframe, Prototype</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
