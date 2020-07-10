import React, { Component } from 'react';

import ProjectNav from './ProjectNav';
import retina from 'retinajs';

import './AboutPage.scss';
import './WorkPage.scss';
import './Project.scss';

class ProjectB extends Component {
  componentDidMount() {
    retina();
  }

  render() {
    return (
      <div className='project p2'>
        <div className='col-12'>
          <div className='fullWidthBoundHeightPanel gd2'>
            <div className='fullWidthYShift'>
              <img src='assets/p2.png' data-rjs="2"/>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-5 projectTitle'>
          <div className='topPanelCategory'>UI / UX Design</div>
          <div className='topPanelTitle'>Social Table</div>
          <div className='topPanelDescription'>Social table is an app that provides an effective solution for reducing food waste.</div>
        </div>


        <div>
        <div className='sectionPanel col-12'>
            <div className='section textOnly'>INTRO</div>
            <div className='content'>
            I've been interested in food waste problems for a long time. In summer of 2018, I wanted to donate some of my excess food ingredients because I went on a long trip. I found some apps for food sharing and donation, but there were minimal activities on the app.  Through this project, I wanted to design an app that provides effective solution for reducing food waste.
            </div>
        </div>

        <div className='sectionPanel col-12'>
            <div className='section image'>PROJECT GOAL</div>
            <img className='fitImage' src='assets/p2/p2_1.png' data-rjs="2"/>
        </div>

        <div className='sectionPanel col-12'>
          <div className='fullImage grayBackground'>
            <img className='' src="assets/p2/p2_17.jpg" data-rjs="2"/>
          </div>
        </div>

        <div className='sectionPanel col-12'>
          <div className='section image'>PROOF OF CONCEPT</div>
          <img className='fitImage' src='assets/p2/p2_18.jpg' data-rjs="2"/>
        </div>

        <div className='sectionPanel col-12'>
          <div className='fullPaddedSection grayBackground'>
            <div className='container-fluid text-left'>
              <div className='col-12'>
                <div className='section image'>COMPETITORS
                </div>
                <img className='fitImage' src='assets/p2/p2_2.png' data-rjs="2"/>
              </div>
            </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
          <div className='section textOnly'>Findings</div>
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Reliable contents</div>         
            </div>
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Good</div>
              <div className='subtitle entry content'>Meal sharing </div>
              <div className='content'>
                Provides detailed information.
                Guidance message on the request page.
                Members must verify their phone number and email.
                It also works in conjunction with social identity such as Facebook.
                Shows account creation date and activity history.
              </div>  
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Bad</div>
              <div className='subtitle entry content'>Food For All </div>
              <div className='content'>
                There is no review for the foods. Reviews would help with choosing the foods. 
              </div>
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_3.jpg' data-rjs="2"/>
          </div> 
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Various reducing food waste methods</div>         
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Good</div>
              <div className='subtitle entry content'>Food Runners </div>
              <div className='content'>
                They help individuals and companies to make food donations easier via food pickup service.
    As a food pickup volunteer, you help Food Runners.
    You can donate variety food including food ingredients and homemade food.
              </div>  
              <div className='subtitle entry content'>Food For All </div>
              <div className='content'>
                Each time you participate in the service, you earn points that give additional benefits.
    In addition to food donations, you can donate money and also target the donation to organizations.
              </div> 
            </div>  
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Bad</div>
              <div className='subtitle entry content'>Food Runners</div>
              <div className='content'>
    To make a donation, you must call the organization.
              </div>
              <div className='subtitle entry content'>Food for all</div>
              <div className='content'>
    The service is only available in Boston and New York.
              </div>
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_4.jpg' data-rjs="2"/>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Intuitive design</div>         
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Good</div>
              <div className='subtitle entry content'>Food For All </div>
              <div className='content'>
                Create intuitive design through illustrations and icons.
    The most important buttons in the page are designed to be noticeable.
              </div> 
            </div>  
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Bad</div>
              <div className='subtitle entry content'>Food Runners</div>
              <div className='content'>
                Old-looking page design
              </div>
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_5.jpg' data-rjs="2"/>
          </div>    
        </div> 
        <div className='sectionPanel col-12'>
          <div className='fullPaddedSection grayBackground'>
            <div className='container-fluid text-left'>
              <div className='col-12'>
                <div className='section'>PERSONAS
                </div>
                <div className='content row persona_bottom_fix'>
                  <div className='persona_profile twoColLayout'>
                    <img src='assets/p2/p1_9_2.png' data-rjs="2"/>
                    <div className='persona_name'>Jennifer</div>
                    <div className='persona_bio'>
                      <div>College student</div>
                      <div>Berkeley, CA</div>
                      <div>23 years old</div>
                      <div>Single</div>
                    </div>
                  </div>
                  <div className='persona_content twoColLayout'>
                    <div className='persona_quote'>“I throw away a lot of food at the end of every semester, I do not want to waste anymore food”</div>
                    <div className='persona_env'>Bio</div>
                    <div className='persona_text'>She is a college student majoring Business. She is originally from India, and she likes cooking indian food. Sometimes she cooks food and brings that at to school. She likes sharing her recipes with her friends and cooking together. Also, she buys ingredients for cooking with her roommates because they can save money. 
          Sometimes they exchange their remaining ingredients.</div>
                    <div className='persona_env'>Goal</div>
                    <div className='persona_text'>She doesn’t want to waste the remaining food ingredients, she wants to save money.</div>
                    <div className='persona_env'>Frustration</div>
                    <div className='persona_text'>During finals, there is no time to cook and the remaining food items are discarded. When I go home during my vacation, there are many food ingredients that can expired.</div>
                  </div>
                  <div className='persona_profile twoColLayout'>
                    <img src='assets/p2/p1_9_4.png' data-rjs="2"/>
                    <div className='persona_name'>Michael </div>
                    <div className='persona_bio'>
                      <div>Software Enginner</div>
                      <div>San Francisco, CA</div>
                      <div>32 years old</div>
                      <div>Single</div>
                      <div>Income: 150K</div>
                    </div>
                  </div>
                  <div className='persona_content twoColLayout'>
                    <div className='persona_quote'>“Because I only cook on weekends, leftovers often go bad.”</div>
                    <div className='persona_env'>Bio</div>
                    <div className='persona_text'>He is a software engineer in San Francisco. He eats breakfast, lunch at work, and sometimes dinner at home. However, when there is a lot of meetings, he eats out for dinner. Recently he is interested in cooking, so sometimes he cooks on the weekends. He commutes by bicycles because he is interested in environmental protection.</div>
                    <div className='persona_env'>Goal</div>
                    <div className='persona_text'>He wants to learn how to use food ingredients. He wants to donate food that he doesn’t use. He doesn’t want to waste foods from cooking on weekend.</div>
                    <div className='persona_env'>Frustration</div>
                    <div className='persona_text'>There are some ingredients that he doesn’t know about that ,so he ends up discarding them. There are a lot of food ingredients that go bad, becuase he doesn't have enought time to cook.</div>
                  </div>
                  <div className='persona_profile twoColLayout'>
                     <img src='assets/p2/p1_9_5.png' data-rjs="2"/>
                     <div className='persona_name'>Anna</div>
                     <div className='persona_bio'>
                       <div>Instructor</div>
                       <div>Diblin, CA</div>
                       <div>48 years old</div>
                       <div>Marrid</div>
                       <div>Income: 110K</div>
                     </div>
                  </div>
                  <div className='persona_content twoColLayout'>
                    <div className='persona_quote'>“Sometimes I forgot what I bought, because I bought many things at once.”</div>
                    <div className='persona_env'>Bio</div>
                    <div className='persona_text'>She is a college instructor who teachs biology. She lives with her 13- and 8-year-old sons and her husband. She goes to school three times a week to teach students. She usually has dinner at home with her family. She is too busy to go shopping often, so she buy lots of food ingredients at once. She has lived in an apartment for a long time, knows her neighbors well, and sometimes has a barbecue.</div>
                    <div className='persona_env'>Goal</div>
                    <div className='persona_text'>She want to share the left ingredients with neighbors.</div>
                    <div className='persona_env'>Frustration</div>
                    <div className='persona_text'>She often throws away leftovers from the refrigerator.There are many food ingredients that pass the expiration date after purchasing, because she bought a lot of foods and sometimes forgot it.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
          <div className='section image'>IDEATION</div>
          <div className='subtitle content'>Brainstoming with Crazy 8's </div>
          <img className='fitImage sectionImage' src='assets/p2/p2_12.jpg' data-rjs="2"/>

          <div className='col-12'>
          <div className='subtitle content'>Results</div>  
          <div className='subtitle content'>Donation Box</div>  
          <div className='content'>
          Deliver the donation box to the user that requested the donation box on the app. Put the food ingredient in the box, and send the box to the company at no charge.
          </div>
          <div className='subtitle content'>Cooking event</div>
           <div className='content'>
          Have a cooking event with neighbors. Users bring their leftover food or other ingredients. Volunteers teach cooking.
          </div>
          <div className='subtitle content'>Pick up request</div>
          <div className='content'>
          Many leftovers after a party? User can request a food pick up for donation.
          </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
          <div className='section textOnly'>SURVEY</div>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='subtitle entry content'>Survey date</div>
              <div className='content'>
              20-21, Oct., 2018 </div>
              <div className='subtitle entry content'>Number of Participants</div>
              <div className='content'>
              21 (Female 85% / Male 15%) </div>
              <div className='subtitle entry content'>Status</div>
              <div className='content'>
              Single  80%, Couple 20% </div>
              <div className='subtitle entry content'>Google Form Link</div>
              <div className='content'>
               https://goo.gl/forms/igZIQZ6Va9hy0CLA2</div>
            </div>  
            <div className='col-12 col-md-6'>
               <div className='subtitle entry content'>Findings</div>
              <div className='content'>
                More than 50% of participants make food waste because <br/>
                “Busy or they forgot the expiration date” 
              </div>
              <div className='content'>
                47% of participants had experience of donation food.
              </div>
              <div className='content'>
                More than 50% of participants like share foods with friends. 
              </div>
              <div className='content'>
                72% of participants won’t use the app because <br/>
                “I can’t trust the food nor the people.”
              </div>
              </div>
               <div className='col-12'>
               <img className='fitImage sectionImage' src='assets/p2/p2_8.jpg' data-rjs="2"/>
            </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
            <div className='section image'>Sketch</div>
            <img className='fitImage' src='assets/p2/p2_13.jpg' data-rjs="2"/>
        </div>
        <div className='sectionPanel col-12'>
          <div className='fullPaddedSection grayBackground'>
            <div className='container-fluid text-left'>
              <div className='col-12'>
                <div className='section image'>INFORMATION ARCHITECTURE</div>
                <img className='fitImage' src='assets/p2/p2_14.png' data-rjs="2"/>
              </div>
            </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
            <div className='section image'>TASK FLOW</div>
            <div className='subtitle content'>Share the ingredients</div>
             <div className='sectionImage'>
             <img className='fitImage' src='assets/p2/p2_9.jpg' data-rjs="2"/>
             </div>
             <div className='subtitle content'>Get the ingredients</div>
             <div className='sectionImage'>
             <img className='fitImage' src='assets/p2/p2_10.jpg' data-rjs="2"/>
             </div>
             <div className='subtitle content'>Apply to be a volunteer</div>
             <div className='sectionImage'>
             <img className='fitImage' src='assets/p2/p2_11.jpg' data-rjs="2"/>
             </div>
        </div>
        <div className='sectionPanel col-12'>
          <div className='section image'>USER TESTING</div>
          <div className='subtitle content'>Test Flow</div>
          <img className='fitImage' src='assets/p2/p2_6.jpg' data-rjs="2"/>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Target User</div>
              <div className='content'>
                Age group : 25~50 <br/>
                Status : Single / Married <br/>
                Tech savvy: Mid-High <br/>
                Occupation: Student/ Worker <br/>
                Interest: Cooking / Environment <br/>
              </div>  
            </div> 
            <div className='col-12 col-md-6'>
              <div className='font-weight-bold content'>Test Group</div>
              <div className='content'>
                Test Date: 19, OCT. <br/>
                Number of participants : 5  <br/>
                Gender: Female 4 / Male 1 <br/>
                Age group : 25~30  <br/>
                Status : Single  <br/>
                Tech savvy: High <br/>
                Occupation: Student <br/>
                Interest:  Design / Arts
              </div> 
            </div>
            <div className='col-12'>
              <div className='font-weight-bold content'>Script</div>  
              <div className='content'>
              Open the app and check the ingredient. Set the product list option to "Nearby". Is it easy to set the list?<br/>
              Explore the list and choose what you need or want. Why did you choose that product? Is there enough information for choosing the product on the list page?<br/>
              Check the product page. Is there enough information for choosing the product? <br/>
              Request the product from seller. What additional information do you want for the request? 
              </div>
              <img className='fitImage sectionImage' src='assets/p2/p2_7.jpg' data-rjs="2"/>
            </div>
            <div className='col-12'>
              <div className='font-weight-bold content'>Result</div>
              <div className='subtitle entry content'>Need improvement</div>
              <div className='content'>
                Provide reliable contents ( product / profile )<br/>
                Timestamps on request ( date, time )
              </div>
              <div className='subtitle entry content'>New discoveries </div>
              <div className='content'>
                Product location is important to the user.<br/>
                User would like to donate food, but they do not want to receive food from others.
              </div>
              <div className='subtitle entry content'>Similar behaviors</div>
              <div className='content'>
                User wants to get the packaged products such as canned goods. 
              </div>
            </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
          <div className='fullPaddedSection grayBackground'>
            <div className='container-fluid text-left'>
              <div className='col-12'>
                <div className='section image'>WIREFRAME</div>
                <img className='fitImage' src='assets/p2/p2_15.png' data-rjs="2"/>
              </div>
            </div>
          </div>
        </div>
        <div className='sectionPanel col-12'>
            <div className='section image'>FINAL DESIGN</div>
            <img className='fitImage' src='assets/p2/p2_16.jpg' data-rjs="2"/>
        </div>


      <div className='sectionPanel col-12'>
          <div className='section textOnly'>BRAND DESIGN</div>
          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Final Logo</div>         
            </div>
          </div>

          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_19.png' data-rjs="2"/>
          </div> 

           <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Logo Anatomy</div>         
            </div>
            </div>

           <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_21.png' data-rjs="2"/>
          </div>


             <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Best Practice</div>         
             </div>
            </div>


           <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_22.png' data-rjs="2"/>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Color Palette</div>         
             </div>
            </div>

          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_20.png' data-rjs="2"/>
          </div>


           <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Campaign Ideas</div>         
            </div>
           </div>

          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_23.png' data-rjs="2"/>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_24.png' data-rjs="2"/>
          </div>

          <div className='row'>
            <div className='col-12'>
              <div className='sectionSubtitle'>Products</div>         
            </div>
          </div>
          <div className='sectionImage'>
            <img className='fitImage' src='assets/p2/p2_25.png' data-rjs="2"/>
          </div>
        </div>
      </div>
      <ProjectNav 
        prev={{
          href: '/project-a',
          className: 'gd1',
          imgUrl: 'assets/p1.png',
          category: 'UI / UX Design',
          title: 'I was here'
        }}
      next={{
        href: '/project-d',
        className: 'gd4',
        imgUrl: 'assets/p4.png',
        category: 'UX Design',
        title: 'Channel Hyundai Card'
      }}
      />
    </div>
    );
  }
}

export default ProjectB;
