import React, { Component } from 'react'
import Logo from '../../assets/logo-01.png'

import './index.css'

class Header extends Component {
  constructor(props) {
    super(props)

  }
  render () {
    return(
      <div className="container-header">

        <div className="icon">
          <a hrc="http://codyclark.co/historic-preservation-map/">
          <span className="icon-logo">HIST</span>
          <span className="icon-logo">ORIA</span>
          </a>
        </div>

        <div className="search-container search">
          <input
            className="input"
            type="search"
            placeholder="Search Historical Sites"
            value={this.props.search}
            onChange={this.props.updateSearch}
          />
        </div>

        <div className="container-sort">
          <select className="sort-select" onChange={this.props.setSort}>
            <option selected>
              Sort
            </option>
            <option
              className="option"
              value="site-name">
              Site Name
            </option>
            <option
              className="option"
              value="year-built">
              Year Built
            </option>
            <option
              className="option"
              value="address">
              Address
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default Header
