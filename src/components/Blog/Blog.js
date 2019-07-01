import React from 'react'
import './Blog.css';
const Blog = ({title}) => {
    return (
      <section>
      <div className="container">
        <div className="col-12 blogheade">
                <div className="head">
                    <h5>{title}</h5>
                    <hr/>
                </div>
        </div>
      </div>
      <div className="container band" id="blog">
                        
              <div className="item-6">
                <div className="card">
                  <div className="thumb"></div>
                  <article>
                    <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    <a className="read" href="/">Read more</a>
                  </article>
                </div>
              </div>

              <div className="item-6">
                <div className="card">
                  <div className="thumb"></div>
                  <article>
                    <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    <a className="read" href="/">Read more</a>
                  </article>
                </div>
              </div>

              <div className="item-6">
                <div className="card">
                  <div className="thumb"></div>
                  <article>
                    <h1>5 Inspirational Business Portraits and How to Make Your Own</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    <a className="read" href="/">Read more</a>
                  </article>
                </div>
              </div>

      </div>
      </section>
    )

}

export default Blog;
