import React, {Component} from 'react'
import './index.css'

import '../App.css'

export default class SideBar extends Component {
  render() {
    return (
      <div className="about">
        <div className="sidepanel">
          <div className="wrapper">
              <div className="container-header">
                <div className="icon">
                  <svg width="24px" height="24px" viewBox="0 0 24 24">
                  </svg>
                </div>
                <div className="search">
                  <svg></svg>
                  <input className="input" type="search" placeholder="Search site" />
                </div>
                <div className="container-sort">
                  <div className="sort-label">
                    Sort:
                  </div>
                  <select className="sort-select" >
                    <option value="site-name">Site Name</option>
                    <option value="year-built">Year Built</option>
                    <option value="address">Address</option>
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
                <div className="list">
                  <div className="container-description">
                    <div className="description-main">
                      <h1>Site Name</h1>
                    </div>
                    <div className="description-secondary">
                      <span className="address">Address</span>
                      <span className="year-built">| Year Built</span>
                    </div>
                    <div class="image">
                      <img src="" alt="" />
                    </div>
                  </div>
                  </div>
                </div>
            </div>
      </div>
    )
  }
}
