import React from 'react'
import './MindSetComponent.css'
const MindSetComponent  = ({title}) =>{
    return (
        <section className="mindset">
            <div className="container">
                  <div className="col-12">
                    <div className="head">
                        <h5>{title}</h5>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>How Do We Work </h2>
                    </div>
                </div>
                <div className="row first">
                    <div className="col-md-3 col-xs-12">
                        <h3>1. STEP BACK</h3>
                        <p>It doesn't hurt to get a second opinion. 
                        If we question everything, 
                        we might be able to re(de)fine your situation.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-xs-12 m-auto">
                        <h3>2. LOOK AROUND</h3>
                        <p>A lot has been done before. 
                        We really need to look at other examples, 
                        opinions & competitors to understand what makes them great.</p>
                    </div>
                </div>
                <div className="row second">
                    <div className="col-md-3 col-xs-12 ml-auto">
                        <h3>3. STEP BACK</h3>
                        <p>It doesn't hurt to get a second opinion. 
                        If we question everything, 
                        we might be able to re(de)fine your situation.</p>
                    </div>
                </div>
                <div className="row third">
                    <div className="col-md-6 col-xs-12">
                    <img src="/assets/img/favicon/3.svg" alt=""/>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <h3> 4. WRITE IT DOWN</h3>
                        <p>We'd have to agree on what to
                         build exactly. We blueprint every screen and propose our technical solution. 
                         Your feedback only makes these better.</p>
                    </div>
                </div>
                <div className="row fourth">
                    <div className="col-md-3 col-xs-12">
                        <h3> 5. BUILD WITH SENSE</h3>
                        <p>              
                        With the plans laid out, we design a tasteful but
                     functional interface. In the back, we code with modern best practices in PHP development.
                        </p>
                    </div>
                    <div className="col-md-9 ml-auto dnone">
                        <img src="/assets/img/favicon/03.svg" alt=""/>
                    </div>
                </div>
                <div className="row fifth">
                   <div className="col-md-6  dnone">
                        <img src="/assets/img/favicon/04.svg" alt=""/>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <h3>6. Test it through</h3>
                        <p>              
                                Things are starting to come together. Let's make sure that nothing breaks or slows down. Let's check all devices and circumstances.
                        </p>
                    </div>
                </div>
                  <div className="row fifth">
          
                    <div className="col-md-3 col-xs-12">
                        <h3>7. Follow up</h3>
                        <p>  
                                Accuse us from job protection, but our most successful projects are never finished. Maintenance and further improvements are key for any online project.
                        </p>
                    </div>
                    <div className="col-md-9  dnone">
                        <img src="/assets/img/favicon/05.svg" className="image" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default MindSetComponent;
