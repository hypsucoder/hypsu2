import React, { useRef, useState } from 'react';
import '../style/main.css';
import video from '../assets/video.mp4';
import emailjs from '@emailjs/browser';




function Main() {



  
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_epgpe8v', 'template_fzt8cwe', form.current, '23Eq7bqWuMdSr6hfM')
      .then((result) => {
          console.log(result.text);
          form.current?.reset();

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      </header>



    <section id="page1">

    <video src={video} autoPlay muted loop className='video-bg'></video>

    <div className='intro'>
<div><h6 className="p1"> hypsu is a growth consultancy pioneering tech & marketing</h6></div>
<div><h2 className="p2"> build a future so irresistable,</h2></div>
<div><h2 className="p2"> it becomes inevetible</h2></div>
</div>

    </section>


    <section id ="page2" className='page2'>
            

            <div className='grid-container'>

              <div className='grid-item'>
<div className='ex-form'>
             <div className='exp1div'>
      <p className="exp1">hypsu solves the problems of tomorrow, today.</p>
      </div>
        <p className='exp2'> 
        We keep our ambitious clients ahead
      through insight,
      collaboration, tacking problems fast, remaining local,
      and harnessing our coveted global teams when needed.
      We guide our clients to anticipate what other cannot</p>

      </div>
    </div>
              </div>

    </section>




    <section id ="page3" className='page'>
            

            <div className='grid-container'>

              <div className='grid-item'>

              <div className='formcontrol-container'>
<div className='formcontrol1'><p>OUR TEAMS ARE PURPOSE BUILT AROUND OUR CLIENT’S MOST
   CRITICAL ISSUES AND OPPORTUNITIES, WE BRING DEEP, FUNCTIONAL 
    EXPERTISE TO EVERY STAGE OF THE ENGAGEMENT, WE ARE ALSO
    KNOWN FOR OUR HOLISTIC PERSPECTIVE. </p>
</div>
<div class="scrollable-div">
  <p className="list-item"href="#"><b>Consulting</b><br></br>
  <br></br>
  
  Business Setup<br></br>
Customer Experience<br></br>
Enterprise Technology<br></br>
Growth, Marketing & Sales<br></br>
Media Planning<br></br>
Operations<br></br>
Procurement<br></br>
Research & Test Groups<br></br>
Technology Architecture<br></br>
Web3 & Metaverse<br></br>


</p>
  <p className="list-item" href="#"><b className='tittle'>Creative</b><br></br><br></br>
  Augmented & Virtual Reality<br></br>
Campaign Development<br></br>
Commercial Production<br></br>
Content Creation<br></br>
Film & Photo Studio<br></br>
Logo & Brand Identity<br></br>
Motion Design<br></br>
Packaging<br></br>
Product Design<br></br>
Retail Environments<br></br>
Social & Short-form Content<br></br>
Web & App Design<br></br>
</p>



  <p className="list-item" href="#"><b>Growth</b><br></br><br></br>
  Amazon & Marketplace <br></br>
Communications Planning<br></br>
Connected TV (CTV)<br></br>
Content Marketing<br></br>
Content Strategy<br></br>
Conversion Rate Optimization (CRO)<br></br>
Email, SMS & Communications Platform<br></br>
Marketing Automation<br></br>
Measurement and Reporting<br></br>
Media Planning & Public Relations<br></br>
Over-the-top Media (OTT)<br></br>
Paid Search & Social<br></br>
Search Engine Optimization(SEO)<br></br>
Social and Influencer Marketing<br></br>
Testing and Optimization</p>
  <p className="list-item" href="#"><b>Engineering</b><br></br><br></br>
  Automation & Transformation<br></br>
Cloud Engineering<br></br>
Emerging Technologies<br></br>
Full-stack Development<br></br>
24/7 Managed Services<br></br>
<br></br>
(ARTIFICIAL INTELIGENCE)<br></br>
<br></br>

Chat GPT Bots<br></br>
Content Generation<br></br>
Custom NPL Applications<br></br>
E-commerce & Web Design<br></br>
GPT Chat Bot<br></br>
Machine Learning Ops<br></br>
Personalization<br></br>
Predictive Insights & Alerting<br></br>
Synthetic Labeling</p>

</div>










</div>


    </div>
              </div>

    </section>





    <section id ="page4" className='page'>
            

            <div className='grid-container'>

              <div className='grid-item'>
<div className='career-form'>
      
   <p id="careerp2">
   <h6 id="joinus">join us</h6>     

    We are always looking for<br>
</br> talented and driven people <br>
  </br>to join our growing team. <br>
  </br>If interested, <a href="http://google.com">contact us.</a></p>



  <p id="careerp">WE VALUE<br></br>
    INNOVATION+<br></br>
    COLLABORATION+<br></br>
    EXECUTION.</p>
    </div>
    </div>
              </div>

    </section>



    <section id ="page5" className='page'>
            

            <div className='grid-container'>

              <div className='grid-item'>

             
<div className='page5form'>

<p id="paragraph1">
<h6 id='start-title'>START A PROJECT</h6>

  OUR TEAMS ARE PURPOSE
 BUILT AROUND OUR
 AMBITIOUS CLIENTS WHO
WANT TO DEFINE THE 
FUTURE AND DISCOVER
OPPORTUNITIES THEY MAY
HAVE NEVER IMAGINED</p>

<form ref={form} onSubmit={sendEmail}>
  <div class="row">
    <div class="col-25">
      <label for="fname">Full Name*</label>
    </div>
    <div class="col-75">
      
      <input type="text" id="fname" name="fullname" placeholder="John Doe" />
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="companyname">Company Name*</label>
    </div>
    <div class="col-75">
      <input type="text" id="copmanyname" name="companyname" placeholder="Company X LLC" /> 
    </div>
  </div>
  


  <div class="row">
    <div class="col-25">
      <label for="fname">Phone*</label>
    </div>
    <div class="col-75">
      
      <input type="text" id="fname" name="phone" placeholder="+97156232123" />
    </div>
  </div>



  <div class="row">
    <div class="col-25">
      <label for="fname">Email*</label>
    </div>
    <div class="col-75">
      
      <input type="text" id="fname" name="email" placeholder="email@example.com" />
    </div>
  </div>
  <div class="row">
    <input type="submit" value="SUBMIT"/>
  </div>
  <div className='message'>YOUR FORM HAS BEEN SUBMITTED</div>
  </form>

  </div>
    </div>
              </div>

    </section>













   </div>
  )

}

export default Main
