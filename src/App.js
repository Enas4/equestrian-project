import React, { Component, Fragment } from 'react';
import "./App.css";
import logo1 from "/home/enas/data/React/horse/src/images/horse.webp";
import logo2 from "/home/enas/data/React/horse/src/images/green.jpg";
import logo3 from "/home/enas/data/React/horse/src/images/h1.jpg";
import logo4 from "/home/enas/data/React/horse/src/images/h2.jpg";
import logo5 from "/home/enas/data/React/horse/src/images/h3.jpg";
import logo6 from "/home/enas/data/React/horse/src/images/h4.jpg";
import logo7 from "/home/enas/data/React/horse/src/images/h5.jpg";
import logo8 from "/home/enas/data/React/horse/src/images/h6.jpg";

export default class App extends Component {
  render() {
    return (
      <Fragment>


        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4" className="mt-1 ml-5 mb-2"><img src={logo2} className="logo2" height="130px" width="400px" /></div>
            <div className="col-sm-12 col-md-4 col-lg-4"><img src={logo1} className="horse" className="mr-4" /></div>
            <div className="col-sm-12 col-md-4 col-lg-4" className="mt-1 mb-2"> <img src={logo2} className="logo3" height="130px" width="400px" /></div>
          </div>
        </div>





        <div>
          <div className="items">

            <div className="subitem subitem1">
              <ul class="list-group">
                <li class="list-group-item">Home</li>
                <li class="list-group-item">About</li>
                <li class="list-group-item">Gallery</li>
                <li class="list-group-item">Pages</li>
                <li class="list-group-item">Blog</li>
                <li class="list-group-item">Store</li>
                <li class="list-group-item">Contacts</li>
              </ul></div>

            <div className="subitem subitem2">

              <div className="two">

                <div className="picone">
                  <div class="card">
                    <img src={logo3} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Special weekly courses</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div></div>


                <div className="pictwo">
                  <div class="card">
                    <img src={logo4} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Private lessons for you</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div></div>


                <div className="picthree">
                  <div class="card">
                    <img src={logo5} class="card-img-top" alt="..." height="220px" />
                    <div class="card-body">
                      <h5 class="card-title">Off peak group lessons</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div></div>

              </div>


              <div className="three">

                <div className="picfour">
                  <div class="card">
                    <img src={logo6} class="card-img-top" alt="..." height="220px" />
                    <div class="card-body">
                      <h5 class="card-title">Term riding classes</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div></div>


                <div className="picfive">
                  <div class="card">
                    <img src={logo7} class="card-img-top" alt="..." height="220px" />
                    <div class="card-body">
                      <h5 class="card-title">Improve your ride</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>


                <div className="picsix">
                  <div class="card">
                    <img src={logo8} class="card-img-top" alt="..." height="220px" />
                    <div class="card-body">
                      <h5 class="card-title">Levels</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div >
        </div>

        {/* last div */}


        <div className="footer">

          <div className="card">
            <div className="card-header">
              Designed and developed by <span>Enas</span> !
            </div>
        </div>
        </div>


      </Fragment >
    )
  }
}