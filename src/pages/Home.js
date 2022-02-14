import React, { Component } from "react";
import SliderOne from "../images/slider_one.jpg";
import "./main.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SliderOne} className="d-block w-100" alt="sliderone" />
            </div>
            <div className="carousel-item">
              <img src={SliderOne} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SliderOne} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* //end of carousel */}
        <section id="feature">
          <div className="container text-center pt-4">
            <h2>Features</h2>
            <p className="lead">
              Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl arcu,
              a vehicula lacus ultricies et. Sed iaculis velit id metus pretium,
              quis mattis nunc mattis. Morbi pulvinar magna turpis, ac tempor
              sapien rhoncus vitae. Phasellus rutrum augue eget rhoncus sodales.
              Integer egestas quam et nisl elementum, eget aliquam augue
              porttitor.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop"> </i>
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl
                    arcu, a vehicula lacus ultricies et.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap text-wrap">
                  <i className="fa fa-comments"> </i>
                  <h2>Easy to Customize</h2>
                  <h3>
                    Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl
                    arcu, a vehicula lacus ultricies et.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-leaf"> </i>
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl
                    arcu, a vehicula lacus ultricies et.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-heart"> </i>
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl
                    arcu, a vehicula lacus ultricies et.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-cogs"> </i>
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl
                    arcu, a vehicula lacus ultricies et.
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-download"> </i>
                  <h2>Fresh and Clean</h2>
                  <h3>
                    Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl
                    arcu, a vehicula lacus ultricies et.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="container text-center pt-4">
            <h2>Portfolio</h2>
            <p className="lead">
              Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl arcu,
              a vehicula lacus ultricies et. Sed iaculis velit id metus pretium,
              quis mattis nunc mattis. Morbi pulvinar magna turpis, ac tempor
              sapien rhoncus vitae. Phasellus rutrum augue eget rhoncus sodales.
              Integer egestas quam et nisl elementum, eget aliquam augue
              porttitor.
            </p>
          </div>
          <div className="container">
            <input type="checkbox" id="pic-1" />
            <label for="pic-1" className="lightbox">
              <img src="http://unsplash.it/800/600?image=1" alt=""/>
            </label>
            <input type="checkbox" id="pic-2" />
            <label for="pic-2" className="lightbox">
              <img src="http://unsplash.it/800/600?image=20" alt=""/>
            </label>
            <input type="checkbox" id="pic-3" />
            <label for="pic-3" className="lightbox">
              <img src="http://unsplash.it/800/600?image=48" alt=""/>
            </label>
            <input type="checkbox" id="pic-4" />
            <label for="pic-4" className="lightbox">
              <img src="http://unsplash.it/800/600?image=42" alt=""/>
            </label>
            <input type="checkbox" id="pic-5" />
            <label for="pic-5" className="lightbox">
              <img src="http://unsplash.it/800/600?image=48" alt=""/>
            </label>
            <input type="checkbox" id="pic-6" />
            <label for="pic-6" className="lightbox">
              <img src="http://unsplash.it/800/600?image=60" alt=""/>
            </label>
            <input type="checkbox" id="pic-7" />
            <label for="pic-7" className="lightbox">
              <img src="http://unsplash.it/800/600?image=201" alt=""/>
            </label>
            <input type="checkbox" id="pic-8" />
            <label for="pic-8" className="lightbox">
              <img src="http://unsplash.it/800/600?image=7" alt=""/>
            </label>
            <input type="checkbox" id="pic-9" />
            <label for="pic-9" className="lightbox">
              <img src="http://unsplash.it/800/600?image=119" alt=""/>
            </label>
            <input type="checkbox" id="pic-10" />
            <label for="pic-10" className="lightbox">
              <img src="http://unsplash.it/800/600?image=180" alt=""/>
            </label>
            <input type="checkbox" id="pic-11" />
            <label for="pic-11" className="lightbox">
              <img src="http://unsplash.it/800/600?image=96" alt=""/>
            </label>
            <input type="checkbox" id="pic-12" />
            <label for="pic-12" className="lightbox">
              <img src="http://unsplash.it/800/600?image=24" alt=""/>
            </label>
            <div className="grid">
              <label for="pic-1" className="grid-item">
                <img src="http://unsplash.it/400/300?image=1" alt=""/>
              </label>
              <label for="pic-2" className="grid-item">
                <img src="http://unsplash.it/400/300?image=20" alt=""/>
              </label>
              <label for="pic-3" className="grid-item">
                <img src="http://unsplash.it/400/300?image=48" alt=""/>
              </label>
              <label for="pic-4" className="grid-item">
                <img src="http://unsplash.it/400/300?image=42" alt=""/>
              </label>
              <label for="pic-5" className="grid-item">
                <img src="http://unsplash.it/400/300?image=48" alt=""/>
              </label>
              <label for="pic-6" className="grid-item">
                <img src="http://unsplash.it/400/300?image=60" alt=""/>
              </label>
              <label for="pic-7" className="grid-item">
                <img src="http://unsplash.it/400/300?image=201" alt=""/>
              </label>
              <label for="pic-8" className="grid-item">
                <img src="http://unsplash.it/400/300?image=7" alt=""/>
              </label>
              <label for="pic-9" className="grid-item">
                <img src="http://unsplash.it/400/300?image=119" alt=""/>
              </label>
              <label for="pic-10" className="grid-item">
                <img src="http://unsplash.it/400/300?image=180" alt=""/>
              </label>
              <label for="pic-11" className="grid-item">
                <img src="http://unsplash.it/400/300?image=96" alt=""/>
              </label>
              <label for="pic-12" className="grid-item">
                <img src="http://unsplash.it/400/300?image=24" alt=""/>
              </label>
            </div>
          </div>
        </section>
        <section id="faqs">
        <div className="container text-center pt-4">
            <h2>FAQ's</h2>
            <p className="lead">
              Cras tempus est nec mi dapibus gravida. Morbi pulvinar nisl arcu,
              a vehicula lacus ultricies et. Sed iaculis velit id metus pretium,
              quis mattis nunc mattis. Morbi pulvinar magna turpis, ac tempor
              sapien rhoncus vitae. Phasellus rutrum augue eget rhoncus sodales.
              Integer egestas quam et nisl elementum, eget aliquam augue
              porttitor.
            </p>
          </div>
          <div className="container mt-10">
            <div className="col-md-12">
                    <div className="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne3">
                                <h4 className="panel-title">
                                    <a role="button" className="collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                        Section 1
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo3">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                                        Section 2
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo3">
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThree3">
                                <h4 className="panel-title">
                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                                        Section 3
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree3">
                                <div className="panel-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="spacer"></div>
        </section>
      </div>
    );
  }
}

export default Home;
