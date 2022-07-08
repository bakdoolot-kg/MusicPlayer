import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./component.css";

import b1 from "./images/b1.jpg";
import b2 from "./images/b2.jpg";
import g1 from "./images/g1.jpg";
import g2 from "./images/g2.jpg";
import g3 from "./images/g3.jpg";
import g4 from "./images/g4.jpg";
import g5 from "./images/g5.jpg";
import g6 from "./images/g6.jpg";
import { Button } from "@mui/material";

const Guest = () => {

  return (
    <div className="guest-page">
      <div className="banner">
        {/* <div className="col-md-2 banner-left">
          <h1>
            <Link to="/">
            <span>MUSIC</span> <i>LIFE</i>
            </Link>
          </h1>
        </div> */}
        <div className="col-md-10 banner-right">
          {/* <div className="navigation">
            <div className="nav-left">
              <span className="menu">
                <img src="./images/menu.png" alt="" />
              </span>
              <ul className="nav1">
                <li className="hvr-underline-from-left button2">
                  <a className="active" href="index.html">
                    Home
                  </a>
                </li>
                <li className="hvr-underline-from-left button2">
                  <a href="about.html">About</a>
                </li>
                <li className="hvr-underline-from-left button2">
                  <a href="albums.html">Albums</a>
                </li>
                <li className="hvr-underline-from-left button2">
                  <a href="features.html">Features</a>
                </li>
                <li className="hvr-underline-from-left button2">
                  <a href="shortcodes.html">Short Codes</a>
                </li>
                <li className="hvr-underline-from-left button2">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <ul>
                <li>
                  <a href="#" className="f1"></a>
                </li>
                <li>
                  <a href="#" className="f2"></a>
                </li>
                <li>
                  <a href="#" className="f3"></a>
                </li>
                <li>
                  <a href="#" className="f4"></a>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div> */}

          <div className="banner-albums">
            <div id="portfoliolist">
              <div className="port-grid">
                <div
                  className="portfolio card mix_all"
                  data-cat="card"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img className="img-responsive lot" src={b1} alt="" />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Rock</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="portfolio app mix_all"
                  data-cat="app"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img className="img-responsive lot" src={b2} alt="" />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">African</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port-grid">
                <div
                  className="portfolio mov mix_all"
                  data-cat="mov"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b3.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Hip Hop</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="portfolio icon mix_all"
                  data-cat="icon"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b6.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Folk</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port-grid">
                <div
                  className="portfolio mov mix_all"
                  data-cat="mov"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b5.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Indie</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="portfolio set mix_all"
                  data-cat="set"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b10.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">College</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port-grid">
                <div
                  className="portfolio card mix_all"
                  data-cat="card"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b4.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Punk</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="portfolio app mix_all"
                  data-cat="app"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b8.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Art Punk</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port-grid">
                <div
                  className="portfolio card mix_all"
                  data-cat="card"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b9.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Jazz</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="portfolio app mix_all"
                  data-cat="app"
                  // style="display: inline-block; opacity: 1;"
                >
                  <div className="portfolio-wrapper">
                    <a
                      data-toggle="modal"
                      data-target=".bs-example-modal-md"
                      href="#"
                      className="b-link-stripe b-animate-go"
                    >
                      <img
                        className="img-responsive lot"
                        src="./images/b7.jpg"
                        alt=""
                      />
                      <div className="b-wrapper">
                        <div className="b-animate b-from-left b-delay03 ">
                          <p className="plus">Rock</p>
                          <div className="port-like">
                            <span
                              className="glyphicon glyphicon-thumbs-up"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                          <div className="port-heart">
                            <span
                              className="glyphicon glyphicon-heart-empty"
                              aria-hidden="true"
                            ></span>
                            3
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="banner-bottom text-center">
            <h3>HELLO!!</h3>
            <h4>Welcome to the world of music</h4>
            <br />
              <Link to="login">
                <Button variant="contained" color="success">Войти</Button>
              </Link>
          </div>
          {/* <div className="latest">
            <h3 className="tittle">FEEL THE MUSIC</h3>
            <div className="tip-grids">
              <div className="col-md-5 tip-grid">
                <figure className="effect-julia">
                  <img src="./images/99.jpg" alt="" />
                  <figcaption>
                    <h4>HIP HOP MUSIC</h4>
                    <p>Voluptas sit aspernatur</p>
                    <p>Nemo enim ipsam volupta</p>
                    <p>Accusamus et iusto odio</p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-7 tip-grid-right">
                <div className="tip-gd-left">
                  <div className="micro-left">
                    <img src="./images/11.png" alt="" />
                  </div>
                  <div className="micro-right">
                    <h4>Voluptas sit aspernatur</h4>
                    <p>
                      {" "}
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Debitis aut
                      rerum necessitatibus.{" "}
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="tip-gd-left">
                  <div className="micro-left">
                    <img src="./images/22.png" alt="" />
                  </div>
                  <div className="micro-right">
                    <h4>Voluptas sit aspernatur</h4>
                    <p>
                      {" "}
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Debitis aut
                      rerum necessitatibus.
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div> */}
          <div className="effect-grid">
            <h3 className="tittle">OUR PROGRAMS</h3>
            <ul className="grid cs-style-3">
              <li>
                <figure>
                  <img src={g1} alt="img02" />
                  <figcaption>
                    <h4>MUSIC LIFE</h4>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={g2} alt="img03" />
                  <figcaption>
                    <h4>MUSIC LIFE</h4>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={g3} alt="img06" />
                  <figcaption>
                    <h4>MUSIC LIFE</h4>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={g4} alt="img04" />
                  <figcaption>
                    <h4>MUSIC LIFE</h4>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={g5} alt="img05" />
                  <figcaption>
                    <h4>MUSIC LIFE</h4>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img src={g6} alt="img01" />
                  <figcaption>
                    <h4>MUSIC LIFE</h4>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
          <div className="best-music text-center">
            <h3 className="tittle">ENJOY THE WORLD'S SOUNDS</h3>
            <div className="servc-grids">
              <div className="col-md-3 servc-grid">
                <div className="servc-icon hi-icon-effect-8">
                  <a href="#" className="hi-icon hi-icon-archive">
                    <span
                      className="glyphicon glyphicon glyphicon-user"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
                <h4>Lorem ipsum dolor </h4>
                <p>
                  Nam libero tempore cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod{" "}
                </p>
              </div>
              <div className="col-md-3 servc-grid">
                <div className="servc-icon hi-icon-effect-8">
                  <a href="#" className="hi-icon hi-icon-archive">
                    <span
                      className="glyphicon glyphicon glyphicon-home"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
                <h4>Lorem ipsum dolor </h4>
                <p>
                  Nam libero tempore cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod{" "}
                </p>
              </div>
              <div className="col-md-3 servc-grid">
                <div className="servc-icon hi-icon-effect-8">
                  <a href="#" className="hi-icon hi-icon-archive">
                    <span
                      className="glyphicon glyphicon glyphicon-facetime-video"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
                <h4>Lorem ipsum dolor </h4>
                <p>
                  Nam libero tempore cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod{" "}
                </p>
              </div>
              <div className="col-md-3 servc-grid">
                <div className="servc-icon hi-icon-effect-8">
                  <a href="#" className="hi-icon hi-icon-archive">
                    <span
                      className="glyphicon glyphicon glyphicon-heart-empty"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
                <h4>Lorem ipsum dolor </h4>
                <p>
                  Nam libero tempore cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod{" "}
                </p>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          {/* <div className="footer">
            <div className="col-md-3 footer-grid">
              <h4>Address</h4>
              <ul>
                <li>MUSIC LIFE</li>
                <li>3926 Anmoore Road</li>
                <li>Newyork, NY 10014</li>
                <li>718-749-1714</li>
              </ul>
            </div>
            <div className="col-md-3 footer-grid">
              <h4>Popular</h4>
              <ul>
                <li>
                  <a href="#">Hard Rock</a>
                </li>
                <li>
                  <a href="#">African Music</a>
                </li>
                <li>
                  <a href="#">Hip Hop Music</a>
                </li>
                <li>
                  <a href="#">Folk Music</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-grid">
              <h4>Details</h4>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="albums.html">Albums</a>
                </li>
                <li>
                  <a href="features.html">Features</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-grid">
              <h2>
                <a href="index.html">MUSIC LIFE</a>
              </h2>
              <p>
                &copy; 2016 Music Life. All Rights Reserved | Design by{" "}
                <a href="http://w3layouts.com/"> W3layouts</a>
              </p>
            </div>
            <div className="clearfix"></div>
          </div> */}
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Guest;
