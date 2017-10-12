import React, { Component } from 'react'
import Header from './Header'
import Sites from '../Sites/'
import {Link} from 'react-router-dom'


class AllSites extends Component {

  render () {
    return(
      <div style={{ flexDirection: 'column' }}>
        <Header
          search={this.props.search}
          updateSearch={this.props.updateSearch}
          setSort={this.props.setSort}
        />
        <div className="list">
          {this.props.filterSites.map((site,i) =>
            <Link to={`/sites/${site.properties.SITEID}`} key={i} style={{ textDecoration: 'none' }}>
              <Sites key={site.properties.SITEID} properties={site.properties} />
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default AllSites
