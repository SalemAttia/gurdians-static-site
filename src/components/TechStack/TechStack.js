import React from 'react'
import './TechStack.css';
const TechStack = () => {
    return (
      <section className="TechStack clearfix">
          <div className="container">
              <div className="row">
                  <div className="col-12 text-center">
                      <div className="banner r">
                            <img src="/assets/img/favicon/laravel.png" alt="laravel" id="logo"/>
                      </div>
                      <div className="banner">
                            <img src="/assets/img/favicon/vue.png" alt="vue"  id="logo"/>
                      </div>
                      <div className="banner l">
                            <img  src="/assets/img/favicon/node.png" alt="node"  id="logo"/>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <div className="content">
                    <h5>Laravel</h5>
                    <p>
                    Laravel is one of the fastest growing open source PHP frameworks at the moment,
                    letting us set up both simple sites as well as complex applications.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                <div className="content">
                  <h5>VueJS</h5>
                  <p>
                    Vue.js is our frontend framework of choice. We use it to render UIs & dynamic data in your browser.
                     It's comparable to React, but has a larger foot in the door in Laravel projects.
                  </p>
                </div>
                </div>
                <div className="col-md-4 col-xs-12">
                <div className="content">
                  <h5>NodeJS</h5>
                  <p>
                    Node.js is an open source server environment.
                    Node.js allows you to run JavaScript on the server.
                  </p>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                    <div className="head">
                          <h5>Our technology stack</h5>
                          <hr/>
                      </div>
                </div>
                <div className="col-md-4 col-xs-12"></div>

                <div className="col-md-4 col-xs-12"></div>

                <div className="col-md-4 col-xs-12"></div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <div className="stacks">
                    <h5>frontend</h5>
                    <ul>
                      <li>VueJS</li>
                      <li >Css</li>
                      <li >Sass</li>
                    </ul>
                    <ul>
                      <li >React</li>
                      <li >npm</li>
                      <li >vanilla JS</li>
                    </ul>
                    <h5 className="mt-3">Services</h5>
                    <ul>
                      <li >MailChimp</li>
                      <li >Sendgrid</li>
                    </ul>
                    <ul>
                      <li >Google Analytics</li>
                      <li >Google Tag Manager</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="stacks">
                    <h5>Backend</h5>
                    <ul>
                      <li >Larvel</li>
                      <li >mysql</li>
                      <li >nodejs</li>
                    </ul>
                    <ul>
                      <li >php</li>
                      <li >Mongo</li>
                      <li >Wordpress</li>
                    </ul>
                    <h5 className="mt-3">INTEGRATIONS</h5>
                    <ul>
                      <li >Stripe</li>
                      <li >Ingenico</li>
                     <li>Salesforce</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="stacks">
                    <h5>SERVER</h5>
                    <ul>
                      <li >Digital Ocean</li>
                      <li >Laravel Forge</li>
                    </ul>
                    <ul>
                      <li >S3</li>
                      <li >Nginx</li>
                      <li >Docker</li>
                    </ul>

                  </div>
                </div>
              </div>
          </div>
      </section>
    )

}

export default TechStack;
