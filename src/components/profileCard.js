import React, { Component } from "react";
import "./profileCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default class ProfilePicture extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="card-wrapper">
          
        </div>
        {/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div class="card" id="Second_Card">
          <div class="card-image">
            <img src="" alt="profile one" />
          </div>

          <ul class="social-icons">
            <li>
              <a href="https://www.facebook.com/sean.murphy.965?ref=bookmarks">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFile} />
              </a>
            </li>
          </ul>

          <div class="details">
            <h2>
              Sean Murphy
              <br />
              <span class="job-title" />
            </h2>
          </div>
        </div>
        {/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div class="card" id="Third_Card">
          <div class="card-image">
            <img src="" alt="profile one" />
          </div>

          <ul class="social-icons">
            <li>
              <a href="https://github.com/seanmurphy355">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/seanmurphyor/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a href="">
                <FontAwesomeIcon icon={faFile} />
              </a>
            </li>
          </ul>

          <div class="details">
            <h2>
              Ryan Murphy
              <br />
              <span class="job-title" />
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
