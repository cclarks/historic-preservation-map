import React, { Component } from 'react'
import Library from '../../assets/library.svg'

class Header extends Component {
  constructor(props) {
    super(props)

  }
  render () {
    return(
      <div className="container-header">
        <div className="icon">
          <svg width="24px" height="24px" viewBox="0 0 24 24">{Library}
          </svg>
        </div>
        <div className="search">
          <a href=""><i className="fa fa-search" aria-hidden="true"></i></a>
          <input className="input"
            type="search"
            placeholder="Search site"
            value={this.props.search}
            onChange={this.props.updateSearch}
          />
        </div>
        <div className="container-sort">
          <div className="sort-label">
            Sort:
          </div>
          <select className="sort-select" onChange={this.props.setSort}>
            <option
              value="site-name">
              Site Name
            </option>
            <option
              value="year-built">
              Year Built
            </option>
            <option
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
