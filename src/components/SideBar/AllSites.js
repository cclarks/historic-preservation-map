import React, { Component } from 'react'
import Header from '../Sites/Header.js'
import Sites from '../Sites/'
import {Link} from 'react-router-dom'


class AllSites extends Component {
  constructor(props) {
    super(props)

  }

  render () {
    return(
      <div style={{ flexDirection: 'column' }}>
        <Header
          search={this.props.search}
          updateSearch={this.props.updateSearch}
          setSort={this.props.setSort}
        />
        <div className="list">
          {this.props.filterSites.map(site =>
            <Link to={`/sites/${site.properties.SITEID}`}>
              <Sites key={site.properties.SITEID} properties={site.properties} />
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default AllSites
