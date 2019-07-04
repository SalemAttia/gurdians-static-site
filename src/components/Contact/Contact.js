import React from 'react'
import './contact.css';
const Contact = () => {
    return (
<footer>
    <div className="container">
      <div className="row">
            <div className="col-12 text-center">
                <h2>Get In Touch With US</h2>
            </div>
        </div>  
       <div className="row">
            <div className="col-12">
                <div className="contact m-auto">
                    <form action="">
                        <div className="row">
                              <div className="form-group col-12">
                                 <input type="text" className="form-control"placeholder="Your Name"/>
                              </div>
                              <div className="form-group col-12">
                                 <input type="email" className="form-control" placeholder="Your Email"/>
                              </div>
                              <div className="form-group col-12">
                                 <input type="text" className="form-control" placeholder="Your phone"/>
                              </div>
                                <div className="form-group col-12">
                                   <textarea className="form-control" placeholder="Your Message"></textarea>
                                </div>
                                <div class="form-group col-12 text-center">
                                    <button type="submit" class="btn btn-light">Submit</button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
       </div>
       <div className="row">
            <div className="col-12">
                <div className="icons m-auto">
                    <ul className="list-unstyled ">
                        <li><a href="#"> <i className="fa fa-facebook fa-2x"></i></a> </li>
                        <li><a href="#"> <i className="fa fa-twitter fa-2x"></i></a> </li>
                        <li><a href="#"> <i className="fa fa-linkedin fa-2x"></i></a> </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
</footer>
    )

}

export default Contact;
